import React, { useState } from 'react'
import style from './Card.module.css'
import lockImage from '../../images/lock.png'
import unlockImage from '../../images/unlock.png'
import SellItem from './Modal/SellItem'

export default function Card({ item}) {

    const lock = parseFloat(item.lock)
    const lockElement = lock > 0 ? (
    <div className={style.lockBody}>
        <div className={style.lockImage}>
        <img src={lockImage} alt="lock"/>
        </div>
        <div className={style.lockText}>{item.lock}d</div>
    </div>
    ) : (
    <div className={style.lockBody}>
        <div className={style.unlockImage}><img src={unlockImage} alt="unlock"/></div>
    </div>
    )

    const [isOpen, setIsOpen] = useState(false)

    function handleOpen(){
        setIsOpen(true)
    }

    function handleClose(){
        setIsOpen(false)
    }

  return (
    <div className={style.container} style={{ backgroundImage: `url(${item.image})` }}> 
        <div className={style.header} onClick={handleOpen}>
            <div className={style.weaponName}>{item.weaponName}</div>
            <div className={style.skinName}>{item.skinName}</div>
        </div>
        <div className={style.quality} onClick={handleOpen}>
            {item.quality}
        </div>
        <div className={style.footer} onClick={handleOpen}>
            <div className={style.float}>
                {parseFloat(item.float).toFixed(7)}
            </div>
            <div className={style.lock} onClick={handleOpen}>
                {lockElement}
            </div>
        </div>
        <SellItem open={isOpen} handleClose={handleClose} item={item}/>
    </div>
  )
}
