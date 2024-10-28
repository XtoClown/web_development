import React from 'react'
import anonUserAvatar from '../../image/anonUserAvatar.jfif'
import deleteImage from '../../image/delete.png'
import style from './Comment.module.css'
import styled from 'styled-components'
import { useThemeContext } from '../ThemeContext/ThemeContext'

const UserComment = styled.div`
  height: 10vh;
  width: 30vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0.2vmin solid;
  margin-bottom: 3vmin;
`

export default function Comment(props) {

  const theme = useThemeContext();

  return (
    <UserComment style={{ borderColor: theme.decorColor }}>
      <div className={style.commentatorInfo}>
        <div className={style.userAvatar}><img src={props.userAvatar} alt="avatar"/></div>
        <div className={style.userName} style={{ color: theme.decorColor }}>{props.userName}</div>
      </div>
      <div className={style.commentPlace}>
        <div className={style.commentText} style={{ color: theme.decorColor, backgroundColor: theme.secondaryColor }}>{props.commentText}</div>
      </div>
      <div className={style.trashHolder}>
        <div className={style.trash} style={{ backgroundColor: theme.secondaryColor }}>
          <img src={deleteImage} alt="delete" onClick={props.deleteComment}/>
        </div>
      </div>
    </UserComment>
  )
}

Comment.defaultProps = { userName: "Anon", userAvatar: anonUserAvatar, commentText: "Some text" }
