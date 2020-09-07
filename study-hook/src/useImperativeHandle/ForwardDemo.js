import React, {useRef, forwardRef, useImperativeHandle} from 'react'

const HYInput = forwardRef((props, ref) => {
  // 创建组件内部的ref
  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus()
    },
    printHello() {
      console.log('Hello World')
    }
  }))

  /* 这里确定是组件内容的input */
  return <input type='text' ref={inputRef}/>
})

export default function ImperativeHandleHookForwardDemo() {
  const inputRef = useRef()

  return (
      <div>
        <HYInput ref={inputRef}/>
        <button onClick={e => inputRef.current.focus()}>聚焦</button>
        <button onClick={e => inputRef.current.printHello()}>Hello World</button>
      </div>
  )
}