import React from 'react'
import style from './Selected.module.css'
import { useItemsSelectedContext } from '../../Context/ItemsSelectedContext'
import lockImage from '../../../images/lock.png'
import unlockImage from '../../../images/unlock.png'
import informationImage from '../../../images/information.png'

export default function SelectedItem({ item }) {

    const select = useItemsSelectedContext()

    const userPhoto = item.ownerPhoto ? item.ownerPhoto : null

    const lock = parseFloat(item.lock)
    const lockElement = lock > 0 ? (
        <div className={style.lockBody}>
          <div className={style.lockImage}>
            <img src={lockImage} alt="lock"/>
            </div>
          <div className={style.lockText}>{item.lock}</div>
        </div>
        ) : (
        <div className={style.lockBody}>
          <div className={style.unlockImage}><img src={unlockImage} alt="unlock"/></div>
        </div>
        )      

  return (
    <div className={style.container} style={{ backgroundImage: `url(${item.image})` }} onClick={() => select.handleDeselection(item)}>
      <div className={style.header}>
        <div className={style.price}>${item.price}</div>
        <div className={style.info}>
          <img src={informationImage} alt="info" />
        </div>
      </div>
      <div className={style.body}>
        <div className={style.discount}>-21%</div>
        { userPhoto && (
        <div className={style.owner}>
          <img src={userPhoto} alt="av"/>
        </div>
        )}
        <div className={style.quality}>{item.quality}</div>
      </div>
      <div className={style.footer}>
        <div className={style.float}>{parseFloat(item.float).toFixed(7)}</div>
        <div className={style.lock}>{lockElement}</div>
      </div>
    </div>
  )
}
