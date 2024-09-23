import React, { Component } from 'react'
import anonUserAvatar from '../image/anonUserAvatar.jfif'

export default class Comment extends Component {
  render() {
    return (
      <div class="userComment">
        <div class="commentatorInfo">
            <div class="userAvatar"><img src={this.props.userAvatar} alt="avatar"/></div>
            <div class="userName">{this.props.userName}</div>
        </div>
        <div class="commentPlace">
            <div class="commentText">{this.props.commentText}</div>
        </div>
      </div>
    )
  }
}

Comment.defaultProps = { userName: "Anon", userAvatar: anonUserAvatar, commentText: "Some text" }
