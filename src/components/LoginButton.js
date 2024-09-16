import React, { Component } from 'react'
import Modal from './Modal/Modal'

export default class LoginButton extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       modalActive: false
    }

    this.modalOpen = this.modalOpen.bind(this)
    this.modalClose = this.modalClose.bind(this)
  }
  
  modalOpen(){
    this.setState({modalActive: true})
  }

  modalClose(){
    this.setState({modalActive: false})
  }

  render() {
    const modalActive = this.state.modalActive;
    let modal;
    if (modalActive) modal = <Modal closeModal={this.modalClose} loginFunction={this.props.onClick} setUserName={this.props.setUserName}/>
    return (
      <div class="customButton">
        {modal}
        <button onClick={this.modalOpen}>Login</button>
      </div>
    )
  }
}
