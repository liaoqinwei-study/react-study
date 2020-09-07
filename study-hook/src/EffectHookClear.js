import React, {useEffect, useState} from 'react'


export default function EffectHookClear() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('每次DOM更新时会回调')

    return () => {
      console.log('DOM被移除时会回调')
    }
  })

  return (<div>
    <h2>当前计数:{count}</h2>
    <button onClick={e => setCount(count + 1)}>+1</button>
    <button onClick={e => setCount(count - 1)}>-1</button>
  </div>)
}

