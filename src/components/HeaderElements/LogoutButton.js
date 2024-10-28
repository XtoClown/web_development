import React from 'react'
import { useLoginContext } from '../User/LoginContext'
import style from './Button.module.css'
import { useThemeContext } from '../ThemeContext/ThemeContext';

export default function LogoutButton() {

  const login = useLoginContext();
  const logout = () => login.handleLoggedInChange(false);

  const theme = useThemeContext();

  return (
    <div className={style.customButton}>
      <button onClick={logout} style={{ backgroundColor: theme.secondaryColor, color: theme.decorColor }}>Logout</button>
    </div>
  )
}
