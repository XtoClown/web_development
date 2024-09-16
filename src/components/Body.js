import React, { Component } from 'react'

export default class Body extends Component {
  render() {
    return (
      <div class="appBody">
          {this.props.children}
      </div>
    )
  }
}

Body.defaultProps = { children: null };