import React, { Component } from 'react'

export default class LogoutButton extends Component {
    
  render() {
    return (
      <div class="customButton" onClick={this.props.onClick}>
        <button>Logout</button>
      </div>
    )
  }
}