import React from 'react'
import picture from '../../image/picture.gif'
import style from './Homepages.module.css'

export default function Picture() {
  return (
    <div className={style.appBody}>
      <img className={style.picturePageImage} src={picture} alt="Picture"/>
    </div>
  )
}
