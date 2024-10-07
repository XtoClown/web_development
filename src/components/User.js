import React from 'react'
import { useUser } from './User/UserContext'

export default function User() {

  const user = useUser();
  const username = user.username;
  const avatar = user.avatar;

  return (
    <div class="userInfo">
      {username}
      <img src={avatar} alt="avatar"/>
    </div>
  )
}