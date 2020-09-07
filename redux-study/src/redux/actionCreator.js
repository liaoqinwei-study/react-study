import {ADD_NUMBER, SUB_NUMBER, CHANGE_BANNER, CHANGE_RECOMMEND} from "./constants";

import axios from 'axios'

let addAction = (counter) => ({type: ADD_NUMBER, counter});
let subAction = (counter) => ({type: SUB_NUMBER, counter});
let changeBannersAction = (banner) => ({type: CHANGE_BANNER, banner})
let changeRecommendsAction = (recommend) => ({type: CHANGE_RECOMMEND, recommend})

let getHomeMultidataAction = () => {
  return (dispatch) => {
    axios('http://123.207.32.32:8000/home/multidata').then(res => {
      let data = res.data.data;
      dispatch(changeBannersAction(data.banner.list))
      dispatch(changeRecommendsAction(data.recommend.list))
    })
  }
}


export {addAction, subAction, changeBannersAction, changeRecommendsAction, getHomeMultidataAction}