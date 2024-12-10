import React from 'react'
import style from './ItemsHeader.module.css'
import Find from './Find/Find'
import DropDown from './Sort/DropDown'

export default function ItemsHeader() {
  return (
    <div className={style.container}>
      <div className={style.find}>
        <Find/>
      </div>
      <div className={style.sort}>
        <DropDown/>
      </div>
    </div>
  )
}
