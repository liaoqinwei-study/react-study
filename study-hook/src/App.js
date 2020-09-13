import React, {createContext} from 'react'
import {Home, Profile} from "./selfHook/SelfHook2";
import {Home as SelectorHome} from './useSelector/UseSelector'
import {Provider} from 'react-redux'
import store from './redux'
import axios from 'axios'
import {CHANGE_RECOMMEND} from "./redux/constans";

export const UserContext = createContext({name: '壳子'})
export const TokenContext = createContext({mes: '帅'})
axios({
  method: 'get',
  url: 'http://152.136.147.123:9090/recommend'
}).then(res => {
  store.dispatch({type: CHANGE_RECOMMEND, recommend: res.data.homeData.hotList})
})
export default function App() {
  return (
      <Provider store={store}>
        <div>
          <Home/>
          <Profile/>
          <SelectorHome/>
          <h2>哈哈哈</h2>
        </div>
      </Provider>
  )
}

