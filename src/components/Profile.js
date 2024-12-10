import React from 'react'
import style from './Profile.module.css'
import UserInfo from './Profile/UserInfo'
import Inventory from './Profile/Inventory'
import Market from './Profile/Market'

export default function Profile() {

  return (
    <div className={style.container}>
        <div className={style.profileCont}>
          <div className={style.profile}>
            <UserInfo/>
          </div>
          <div className={style.inventory}>
            <Inventory/>
          </div>
          <div className={style.market}>
            <Market/>
          </div>
        </div>
    </div>
  )
}
