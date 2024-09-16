import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <div class="customButtonDiv">
        <button>{this.props.text}</button>
      </div>
    )
  }
}

Button.defaultProps = { text:"Button" }