import React from 'react'
import picture from '../../image/picture.gif'
import style from './Homepages.module.css'
import { useThemeContext } from '../ThemeContext/ThemeContext'

export default function Picture() {

  const theme = useThemeContext();

  return (
    <div className={style.appBody} style={{ backgroundColor: theme.primaryColor}}>
      <img className={style.picturePageImage} src={picture} alt="Picture" style={{ borderColor: theme.decorColor }}/>
    </div>
  )
}
