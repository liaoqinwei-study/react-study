import React, {useEffect, useState} from 'react'

export function Home() {
  let [count, setCount] = useState(0)
  useLogging('Home')
  setTimeout(() => {
    setCount(1)
  }, 1000)
  return (
      <div>
        <h2>HOME</h2>
      </div>
  )
}

export function Profile() {
  useLogging('Profile')
  return (
      <div>
        <h2>PROFILE</h2>
      </div>
  )
}

function useLogging(name) {
  useEffect(() => {
    console.log(`component initial ${name}`)
    return () => {
      console.log(`component destroy ${name}`)
    }

  })
}