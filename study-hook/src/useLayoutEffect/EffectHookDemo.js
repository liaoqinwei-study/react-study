import React, {useEffect, useState, useLayoutEffect} from 'react'

/*
* 使用 useEffect 会闪烁
* 原因 useEffect 中
* */
/*export default function EffectHookDemo() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count === 0) {
      setCount(Math.random() * 200)
    }
  }, [count])

  return (
      <div>
        <h2>当前数字:{count}</h2>
        <button onClick={e => setCount(0)}>随机数</button>
      </div>
  )
}*/

export default function EffectHookDemo() {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random() * 200)
    }
  }, [count])

  return (
      <div>
        <h2>当前数字:{count}</h2>
        <button onClick={e => setCount(0)}>随机数</button>
      </div>
  )
}