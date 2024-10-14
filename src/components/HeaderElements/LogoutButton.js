import React from 'react'
import { useLoginContext } from '../User/LoginContext'
import style from './Button.module.css'

export default function LogoutButton() {

  const login = useLoginContext();
  const logout = () => login.handleLoggedInChange(false);

  return (
    <div className={style.customButton} onClick={logout}>
      <button>Logout</button>
    </div>
  )
}
