import React from 'react'
import style from './Header.module.css'
import findIcon from '../../../images/find.png'

export default function Icon() {
  return (
    <div className={style.icon}>
      <img src={findIcon} alt="find"/>
    </div>
  )
}
