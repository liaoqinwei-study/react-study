export default function combineReducers(reducers: ReducersMapObject) {
    const reducerKeys = Object.keys(reducers)
    const finalReducers: ReducersMapObject = {}
    for (let i = 0; i < reducerKeys.length; i++) {
        const key = reducerKeys[i]

        if (process.env.NODE_ENV !== 'production') {
            if (typeof reducers[key] === 'undefined') {
                warning(`No reducer provided for key "${key}"`)
            }
        }

        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key]
        }
    }
    const finalReducerKeys = Object.keys(finalReducers)

    // This is used to make sure we don't warn about the same
    // keys multiple times.
    let unexpectedKeyCache: { [key: string]: true }
    if (process.env.NODE_ENV !== 'production') {
        unexpectedKeyCache = {}
    }

    let shapeAssertionError: Error
    try {
        assertReducerShape(finalReducers)
    } catch (e) {
        shapeAssertionError = e
    }

    return function combination(
        state: StateFromReducersMapObject<typeof reducers> = {},
        action: AnyAction
    ) {
        if (shapeAssertionError) {
            throw shapeAssertionError
        }

        if (process.env.NODE_ENV !== 'production') {
            const warningMessage = getUnexpectedStateShapeWarningMessage(
                state,
                finalReducers,
                action,
                unexpectedKeyCache
            )
            if (warningMessage) {
                warning(warningMessage)
            }
        }

        let hasChanged = false
        const nextState: StateFromReducersMapObject<typeof reducers> = {}
        for (let i = 0; i < finalReducerKeys.length; i++) {
            const key = finalReducerKeys[i]
            const reducer = finalReducers[key]
            const previousStateForKey = state[key]
            const nextStateForKey = reducer(previousStateForKey, action)
            if (typeof nextStateForKey === 'undefined') {
                const errorMessage = getUndefinedStateErrorMessage(key, action)
                throw new Error(errorMessage)
            }
            nextState[key] = nextStateForKey
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey
        }
        hasChanged =
            hasChanged || finalReducerKeys.length !== Object.keys(state).length
        return hasChanged ? nextState : state
    }
}