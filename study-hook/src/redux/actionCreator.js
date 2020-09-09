import {ADD_COUNT, SUB_COUNT, CHANGE_RECOMMEND, CHANGE_BANNER} from "./constans";

export const addAction = (num) => ({type: ADD_COUNT, num})
export const subAction = (num) => ({type: SUB_COUNT, num})
export const changeBannerAction = (banner) => ({type: CHANGE_BANNER, banner})
export const changeRecommendAction = (recommend) => ({type: CHANGE_RECOMMEND, recommend})