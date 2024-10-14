import React from 'react'
import { useUser } from '../User/UserContext'
import style from './User.module.css'

export default function User() {

  const user = useUser();
  const username = user.username;
  const avatar = user.avatar;

  return (
    <div className={style.userInfo}>
      {username}
      <img src={avatar} alt="avatar"/>
    </div>
  )
}