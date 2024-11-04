import React from 'react'
import style from './Button.module.css'
import { useThemeContext } from '../ThemeContext/ThemeContext'

export default function Button(props) {

  const theme = useThemeContext()

  return (
    <div className={style.customButtonDiv} onClick={props.onClick}>
      <button style={{ backgroundColor: theme.primaryColor, color: theme.decorColor }}>{props.text}</button>
    </div>
  )
}


Button.defaultProps = { text:"Button" }