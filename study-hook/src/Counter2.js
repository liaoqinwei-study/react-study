import React, {useState} from 'react'


export default function Counter2() {
  const [count, setCount] = useState(0)
  return (<div>

    <h2>Hook 当前计数:{count}</h2>
    <button onClick={e => setCount(count + 1)}> +1 </button>
    <button onClick={e => setCount(count - 1)}> -1 </button>
  </div>)

}