import React, {useRef} from 'react'

export default function RefHookDemo() {
  const inputRef = useRef()
  const titleRef = useRef()

  const handleOperating = () => {
    titleRef.current.innerHTML = 'hello react'
    inputRef.current.focus()
  }

  return (<div>
    <input type="text" ref={inputRef}/>
    <h2 ref={titleRef}>默认内容</h2>

    <button onClick={e => handleOperating()}>操作</button>
  </div>)
}
