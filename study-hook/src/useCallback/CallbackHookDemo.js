import React, {useState, memo, useCallback} from 'react'


/*
* useCallback 性能优化
*   在使用useCallback的时候, 返回的函数是之前的函数,
*   所以当useCallback结合 memo 给子组件传入回调的时候 会有一定的性能优化 ( 即 子组件不会重新渲染 )
* useCallback(callback,[哪个状态改变了返回新的])
* */

const CounterIncrement = memo((props) => {
  console.log('CounterIncrement 被渲染了')
  return (<button onClick={e => props.increment()}>+1</button>)
})

export default function CallbackHookDemo() {
  const [counter, setCounter] = useState(0)

  let increment = useCallback(() => {
    setCounter(counter + 1)
  }, [counter])

  let increment1 = function () {
    setCounter(counter + 1)
  }

  return (<div>
    <h2>当前计数:{counter}</h2>
    <CounterIncrement increment={increment}/>
    <CounterIncrement increment={increment1}/>
  </div>)
}
