import {ADD_NUMBER, SUB_NUMBER, CHANGE_BANNER, CHANGE_RECOMMEND} from './constants'

let initialStore = {
  counter: 0,
  banner: [],
  recommend: []
}

let reducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {...state, counter: state.counter + action.counter};
    case SUB_NUMBER:
      return {...state, counter: state.counter - action.counter};
    case CHANGE_BANNER:
      return {...state, banner: action.banner}
    case CHANGE_RECOMMEND:
      return {...state, recommend: action.recommend}
    default :
      return state
  }
}

export default reducer