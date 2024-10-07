import React from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import User from './User'
import logoImage from '../image/logo.png'
import Button from './Button'
import { useLoginContext } from './User/LoginContext'

export default function Header(props) {

  const login = useLoginContext();
  const isLoggedIn = login.isLoggedIn;

  const history = props.history;

  return (
    <div class="header">
      <div class="logo"><img src={logoImage}/></div>
      <div class="headerButtons">
        <Button text={"Home"} onClick={() => history.handlerPageNavigation()}/>
        <Button text={"Support"} onClick={() => history.handlerPageNavigation("/support")}/>
        <Button text={"Picture"} onClick={() => history.handlerPageNavigation("/picture")}/>
        <Button text={"History"} onClick={() => history.handlerPageNavigation("/history")}/>
      </div>
      <div class="account">
        {isLoggedIn ? <LogoutButton /> : <LoginButton />}
        {isLoggedIn ? <User /> : ""}
      </div>
    </div>
  )
}
