import React, { useEffect, useState } from 'react'
import style from './Main.module.css'
import { useItemsSelectedContext } from '../../Context/ItemsSelectedContext'
import lockImage from '../../../images/lock.png'
import unlockImage from '../../../images/unlock.png'
import informationImage from '../../../images/information.png'
import { useUserContext } from '../../Context/UserContext'

export default function Card({ item }) {

  const itemsSelectedContext = useItemsSelectedContext()

  const userPhoto = item.ownerPhoto ? item.ownerPhoto : null
  const userContext = useUserContext()

  const [isOwner, setIsOwner] = useState(false)


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

  function handleSelection(){
    if(!isOwner){
      console.log(item)
      itemsSelectedContext.handleSelection(item)
    }
  } 

  const [currency, setCurrency] = useState([])

  useEffect(() => {
    try{
      if(userContext.user.userId == item.owner){
        setIsOwner(true)
      }
      setCurrency(userContext.currency)
    } catch(error){
      console.log("Error", error)
    }
  }, [userContext])



  return (
    <div className={style.card} style={{ backgroundImage: `url(${item.image})`, border: isOwner ? "0.1vmin solid #51AA77" : "transparent" }} onClick={handleSelection}>
      <div className={style.header}>
        <div className={style.price}>{currency[1]}{(item.price*currency[2]).toFixed(2)}</div>
        <div className={style.info}>
          <img src={informationImage} alt="info" />
        </div>
      </div>
      <div className={style.body}>
        <div className={style.discount}></div>
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
