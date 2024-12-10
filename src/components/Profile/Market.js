import React, { useEffect } from 'react'
import style from './Market.module.css'
import { useInventoryContext } from '../Context/InventoryContext'
import MarketCard from './MarketCard'

export default function Market() {

  const { itemsOnSell } = useInventoryContext()

  return (
    <div className={style.marketContainer}>
        <div className={style.text}>Market Inventory</div>
        <div className={style.marketItems}>
          {itemsOnSell.map((item, index) => (<div key={item ? item.hash : index } className={style.card}>
                {item ? <MarketCard item={item}/> : <div className={style.placeholder}></div>}
            </div>))}
        </div>
    </div>
  )
}
