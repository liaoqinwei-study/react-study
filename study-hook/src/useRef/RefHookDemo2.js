import React, {useRef, useState, useEffect} from 'react'

export default function RefHookDemo2() {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)

  useEffect(() => {
    countRef.current = count;
    console.log(countRef)
  }, [count])

  return (
      <div>
        {console.log('渲染了')}
        <h2>第一次的值:{countRef.current}</h2>
        <h2>这一次的值:{count}</h2>
        <button onClick={e => setCount(count + 1)}> +1</button>
      </div>
  )
}