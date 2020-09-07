import React, {useMemo, useState, memo} from 'react';

let calcNum = (count) => {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += i
  }
  console.log('计算一次')
  return total;
}

const ShowCounter = memo((props) => {
  console.log('重新渲染')
  return <h1>Counter: {props.total}</h1>
})

const ShowInfo = memo((props) => {
  console.log('重新渲染')
  return <h1>信息: {props.info.name}</h1>
})


export default function MemoHookDemo() {
  const [counter, setCounter] = useState(10)
  const [isLogin, setIsLogin] = useState(true)

  /* 我们只有在点击 +1(即counter改变) 的时候才会执行 */
  const total = useMemo(() => {
    return calcNum(counter)
  }, [counter])

  /* 这样写只会渲染一次 */
  const info = useMemo(() => {
    return {name: 'why'}
  }, [])

  return (<div>
    <h2>和数字{total}</h2>
    <button onClick={e => setCounter(counter + 1)}>+1</button>
    <button onClick={e => setIsLogin(!isLogin)}>切换 {String(isLogin)}</button>
    <ShowCounter total={total}/>
    <ShowInfo info={info}/>
  </div>)
}