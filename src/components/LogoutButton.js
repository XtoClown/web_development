import React from 'react'

export default function LogoutButton(props) {
  return (
    <div class="customButton" onClick={props.onClick}>
      <button>Logout</button>
    </div>
  )
}
