import React from 'react'
import style from './VirtualItem.module.css'

export default function VirtualItem({ item, onClick }) {

    const fullName = `${item.weaponName} | ${item.skinName}`
    item.fullName = fullName

  return (
    <div className={style.card} style={{ backgroundImage: `url(${item.image})` }} onClick={onClick}>
        <div className={style.weaponName}>
            {item.weaponName}
        </div>
        <div className={style.skinName}>
            {item.skinName}
        </div>
    </div>
  )
}
