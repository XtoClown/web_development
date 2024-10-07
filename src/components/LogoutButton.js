import React from 'react'
import { useLoginContext } from './User/LoginContext'

export default function LogoutButton() {

  const login = useLoginContext();
  const logout = () => login.handleLoggedInChange(false);

  return (
    <div class="customButton" onClick={logout}>
      <button>Logout</button>
    </div>
  )
}
