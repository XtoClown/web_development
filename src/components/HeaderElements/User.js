import React from 'react'
import { useUser } from '../User/UserContext'
import style from './User.module.css'
import { useThemeContext } from '../ThemeContext/ThemeContext';

export default function User() {

  const user = useUser();
  const username = user.username;
  const avatar = user.avatar;

  const theme = useThemeContext();

  return (
    <div className={style.userInfo} style={{ color: theme.decorColor }}>
      {username}
      <img src={avatar} alt="avatar"/>
    </div>
  )
}