import React, {createContext} from 'react';

import Counter from "./Counter";
import Counter2 from './Counter2'
import UpdateTitle from "./UpdateTitle";
import UpdateTitle2 from "./UpdateTitle2";
import EffectHookClear from "./EffectHookClear";
import MultiUseEffect from "./MultiUseEffect";
import EffectPerformance from "./EffectPerformance";
import Home from './useReducer/Home'
import Profile from './useReducer/Profile'

import CallbackHookDemo from "./useCallback/CallbackHookDemo";
import MemoHookDemo from "./useMemo/MemoHookDemo";
import RefHookDemo from "./useRef/RefHookDemo";
import RefHookDemo2 from "./useRef/RefHookDemo2";
import ForwardDemo from "./useImperativeHandle/ForwardDemo";
import EffectHookDemo from "./useLayoutEffect/EffectHookDemo";

export let UserContext = createContext()
export let ThemeContext = createContext()

/*
* class 的方式实现 计数
* */
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <UserContext.Provider value={{name: 'kezi', age: 18}}>
          <ThemeContext.Provider value={{color: 'red', fontSize: '20px'}}>
            <h2>USE STATE</h2>
            <Counter/>
            <Counter2/>
            <hr/>
            <UpdateTitle/>
            <UpdateTitle2/>
            <hr/>
            <h2>USE EFFECT</h2>
            <EffectHookClear/>
            <hr/>
            <MultiUseEffect/>
            <hr/>
            <h2>USE CONTEXT</h2>
            <EffectPerformance/>
            <hr/>
            <h2>USE REDUCER</h2>
            <Home/>
            <Profile/>
            <hr/>
            <h2>USE CALLBACK</h2>
            <CallbackHookDemo/>
            <hr/>
            <h2>USE MEMO</h2>
            <MemoHookDemo/>
            <hr/>
            <h2>USE REF</h2>
            <RefHookDemo/>
            <RefHookDemo2/>
            <hr/>
            <h2>USE IMPERATIVE HANDLE</h2>
            <ForwardDemo/>
            <hr/>
            <h2>USE LAYOUT EFFECT</h2>
            <EffectHookDemo/>
          </ThemeContext.Provider>
        </UserContext.Provider>
    );
  }
}

export default App;
