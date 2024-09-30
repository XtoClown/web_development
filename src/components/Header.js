import React, {useCallback, useState} from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import User from './User'
import logoImage from '../image/logo.png'
import Button from './Button'

export default function Header(props) {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");


  const handleLogin = useCallback( (name) => {
    props.login();
    setLoggedIn(true);
    setUserName(name);
  })

  const handleLogout = useCallback( () => {
    props.logout();
    setLoggedIn(false);
    setUserName("");
  })

  return (
    <div class="header">
      <div class="logo"><img src={logoImage}/></div>
      <div class="headerButtons">
        <Button text={"Home"}/>
        <Button text={"Support"}/>
        <Button/>
        <Button/>
      </div>
      <div class="account">
        {isLoggedIn ? <LogoutButton onClick={handleLogout}/> : <LoginButton onClick={handleLogin}/>}
        {isLoggedIn ? <User user={userName}/> : ""}
      </div>
    </div>
  )
}
