import React from 'react'
import anonUserAvatar from '../../image/anonUserAvatar.jfif'
import deleteImage from '../../image/delete.png'
import style from './Comment.module.css'
import styled from 'styled-components'

const UserComment = styled.div`
  height: 10vh;
  width: 30vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0.2vmin solid #a89bc5;
  margin-bottom: 3vmin;
`

export default function Comment(props) {

  return (
    <UserComment>
      <div className={style.commentatorInfo}>
        <div className={style.userAvatar}><img src={props.userAvatar} alt="avatar"/></div>
        <div className={style.userName}>{props.userName}</div>
      </div>
      <div className={style.commentPlace}>
        <div className={style.commentText}>{props.commentText}</div>
      </div>
      <div className={style.trashHolder}>
        <div className={style.trash}>
          <img src={deleteImage} alt="delete" onClick={props.deleteComment}/>
        </div>
      </div>
    </UserComment>
  )
}

Comment.defaultProps = { userName: "Anon", userAvatar: anonUserAvatar, commentText: "Some text" }
