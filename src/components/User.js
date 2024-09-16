import React, { Component } from 'react'
import avatar from '../image/avatar.jpg'

export default class User extends Component {
  render() {
    return (
      <div class="userInfo">
        Oleh
        <img src={avatar} alt="avatar"/>
      </div>
    )
  }
}
