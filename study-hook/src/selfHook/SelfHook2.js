import React, {useContext} from 'react'
import {UserContext, TokenContext} from '../App'


export function Home() {
  let [user, token] = useUserToken()
  user.name = 'zhangsan'
  console.log(user, token)

  return (
      <div>
        <h2>Home</h2>
      </div>
  )
}

export function Profile() {
  let [user, token] = useUserToken()
  console.log(user, token)
  return (
      <div>
        <h2>Profile</h2>
      </div>
  )
}

function useUserToken() {
  const user = useContext(UserContext),
      token = useContext(TokenContext)

  return [user, token]
}