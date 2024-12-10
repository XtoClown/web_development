import React, { useEffect, useState } from 'react'
import style from './Inventory.module.css'
import { useInventoryContext } from '../Context/InventoryContext'
import Card from './Card'

export default function Inventory() {

  const { itemsInInventory } = useInventoryContext()  

  return (
    <div className={style.inventoryContainer}>
        <div className={style.text}>User Inventory</div>
        <div className={style.inventoryItems}>
            {itemsInInventory.map((item, index) => (<div key={item ? item.hash : index } className={style.card}>
                {item ? <Card item={item}/> : <div className={style.placeholder}></div>}
            </div>))}
        </div>
    </div>
  )
}
