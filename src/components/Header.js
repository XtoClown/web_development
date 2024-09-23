import React, { Component } from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import User from './User'
import logoImage from '../image/logo.png'
import Button from './Button'

export default class Header extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false,
       userName: ""
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.setUserName = this.setUserName.bind(this)
  }
  
  handleLogin(){
    this.props.login();
    this.setState({isLoggedIn: true})
  }

  handleLogout(){
    this.props.logout();
      this.setState({isLoggedIn: false})
  }

  setUserName(name){
    this.setState({userName: name})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let user;
    if (isLoggedIn)user = <User user={this.state.userName}/>
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
          {isLoggedIn ? <LogoutButton onClick={this.handleLogout}/> : <LoginButton onClick={this.handleLogin} setUserName={this.setUserName}/>}
          {user}
        </div>
      </div>
    )
  }
}

