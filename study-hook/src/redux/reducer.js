import {ADD_COUNT, SUB_COUNT, CHANGE_RECOMMEND, CHANGE_BANNER} from "./constans";
import {combineReducers} from "redux";

let initialHome = {
  banner: [],
  recommend: []
}

let homeReducer = (state = initialHome, action) => {
  console.log(action)
  switch (action.type) {
    case CHANGE_RECOMMEND:
      return {...state, recommend: action.recommend}
    case CHANGE_BANNER:
      return {...state, banner: action.banner}
    default:
      return {state}
  }
}

let initialCount = {
  count: 0
}

let countReducer = (state = initialCount, action) => {
  switch (action.type) {
    case SUB_COUNT:
      return {...state, count: state.count - action.num}
    case ADD_COUNT:
      return {...state, count: state.count + action.num}
    default:
      return {state}
  }
}

let reducer = combineReducers({homeInfo: homeReducer, countInfo: countReducer})
export default reducer
