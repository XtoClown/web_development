import React from 'react'
import anonUserAvatar from '../image/anonUserAvatar.jfif'

export default function Comment(props) {
  return (
    <div class="userComment">
      <div class="commentatorInfo">
        <div class="userAvatar"><img src={props.userAvatar} alt="avatar"/></div>
        <div class="userName">{props.userName}</div>
      </div>
      <div class="commentPlace">
        <div class="commentText">{props.commentText}</div>
      </div>
    </div>
  )
}

Comment.defaultProps = { userName: "Anon", userAvatar: anonUserAvatar, commentText: "Some text" }
