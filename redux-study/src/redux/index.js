import {createStore, applyMiddleware, compose} from 'redux'

import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import mySaga  from './saga'

let sagaMiddleware = createSagaMiddleware()
let composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose

let enhance = composeEnhance(applyMiddleware(thunkMiddleware, sagaMiddleware))
// 将enhancer 作为第二个参数传入到createStore中
let store = createStore(reducer, enhance)

sagaMiddleware.run(mySaga)



export default store