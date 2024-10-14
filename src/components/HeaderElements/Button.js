import React from 'react'
import style from './Button.module.css'

export default function Button(props) {

  return (
    <div className={style.customButtonDiv} onClick={props.onClick}>
      <button>{props.text}</button>
    </div>
  )
}


Button.defaultProps = { text:"Button" }