import React from 'react'
import avatar from '../image/avatar.jpg'

export default function User() {
  return (
    <div class="userInfo">
      Oleh
      <img src={avatar} alt="avatar"/>
    </div>
  )
}