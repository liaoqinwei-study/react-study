import React, {useState, useEffect, useContext} from "react";
import {ThemeContext, UserContext} from "./App";

export default function EffectPerformance() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  console.log(user, theme)
  useEffect(() => {
    console.log('修改DOM')
  }, [count])

  /* 相当于componentDidMount, componentWillUnmount */
  useEffect(() => {
    console.log('开启定时器')
    return () => {
      console.log('关闭定时器')
    }
  }, [])

  return (<div>
    <h2>当前计数:{count}</h2>
    <button onClick={e => setCount(count + 1)}> +1</button>
    <button onClick={e => setShow(!show)}> 切换{String(show)}</button>
  </div>)
}