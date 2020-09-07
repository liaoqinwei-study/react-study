import {ADD_NUMBER, SUB_NUMBER, CHANGE_BANNER, CHANGE_RECOMMEND} from './constants'
import { combineReducers } from 'redux'

// counter相关状态
const initialCounter = {
  counter: 0
}

function counterReducer(state = initialCounter, action) {
  console.log(state)
  switch (action.type) {
    case ADD_NUMBER:
      return {...state, counter: state.counter + action.counter}
    case SUB_NUMBER:
      return {...state, counter: state.counter - action.counter}
    default :
      return state
  }
}

// home相关的状态
const initialHome = {
  banner: [],
  recommend: []
}

const homeReducer = (state = initialHome, action) => {
  console.log(state)
  switch (action.type) {
    case CHANGE_BANNER:
      return {...state, banner: action.banner}
    case CHANGE_RECOMMEND:
      return {...state, recommend: action.recommend}
    default:
      return state
  }
}


/*let reducer = (state = initialStore, action) => {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.homeInfo, action)
  }
}*/

let reducer = combineReducers({
  counterInfo:counterReducer,
  homeInfo:homeReducer
})

export default reducer