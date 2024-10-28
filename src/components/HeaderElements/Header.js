import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import User from './User'
import logoImage from '../../image/logo.png'
import Button from './Button'
import { useLoginContext } from '../User/LoginContext'
import style from './Header.module.css'
import { Switch } from 'antd'
import { useThemeContext } from '../ThemeContext/ThemeContext'

export default function Header(props) {

  const login = useLoginContext();
  const isLoggedIn = login.isLoggedIn;

  const history = props.history;

  const theme = useThemeContext();

  return (
    <div className={style.header} style={{ backgroundColor: theme.primaryColor, borderColor: theme.decorColor }}>
      <div className={style.logo} style={{ borderColor: theme.decorColor }}><img src={logoImage}/></div>
      <div className={style.headerButtons}>
        <Button text={"Home"} onClick={() => history.handlerPageNavigation()}/>
        <Button text={"Admin"} onClick={() => history.handlerPageNavigation("/admin")}/>
        <Button text={"Picture"} onClick={() => history.handlerPageNavigation("/picture")}/>
        <Button text={"History"} onClick={() => history.handlerPageNavigation("/history")}/>
        <Switch defaultChecked checkedChildren="Dark" unCheckedChildren="White" onChange={theme.handleThemeChange}/>
      </div>
      <div className={style.account}>
        {isLoggedIn ? <LogoutButton /> : <LoginButton />}
        {isLoggedIn ? <User /> : ""}
      </div>
    </div>
  )
}
