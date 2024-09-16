import React, { Component } from 'react'
import './Modal.css';

export default class Modal extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        __correctName: "Oleh",
        __correctPassword: "1234",
        inputName: "",
        inputPassword: "",
        error: false
    }

    this.nameEntered = this.nameEntered.bind(this)
    this.passwordEntered = this.passwordEntered.bind(this)
    this.loginPromt = this.loginPromt.bind(this)
  }
  
  nameEntered(event){
    this.setState({inputName: event.target.value})
  }

  passwordEntered(event){
    this.setState({inputPassword: event.target.value})
  }

  loginPromt(){
    if(this.state.inputName === this.state.__correctName && this.state.inputPassword === this.state.__correctPassword){
        this.props.closeModal();
        this.props.setUserName(this.state.__correctName);
        this.props.loginFunction();
    } else {
        this.setState({error: true});
    }
  }

  render() {
    return (
      <div class="modalWindow">
        <div class="modalContent">
            <div class="loginText">Authorization</div>
            <div class="modalInput">
                <div class="inputLabels">
                    <label for="nameInput" class="nameInput"> Name </label>
                    <label for="passwordInput"> Password </label>
                </div>
                <div class="inputHolders">
                    <input type="text" id="nameInput" onChange={this.nameEntered} placeholder="Enter your name"/>
                    <input type="password" id="passwordInput" onChange={this.passwordEntered} placeholder="Enter your password"/>
                </div>
            </div>
            <div class="error">{this.state.error ? "Incorrect Name or Password": null}</div>
            <button onClick={this.loginPromt}>Login</button>
        </div>
      </div>
    )
  }
}
