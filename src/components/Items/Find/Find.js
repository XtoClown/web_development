import React from 'react'
import Icon from './Icon'
import Input from './Input'
import style from './Header.module.css'
import Update from './Update'

export default function Find() {
  return (
    <div className={style.container}>
        <Icon/>
        <Input/>
        <Update/>
    </div>
  )
}
