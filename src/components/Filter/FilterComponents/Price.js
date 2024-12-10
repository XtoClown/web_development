import React, { useEffect, useState } from 'react'
import style from './FilterComponent.module.css'
import { useItemContext } from '../../Context/ItemsContext'
import debounce from 'lodash.debounce'

export default function Price() {


  const itemContext = useItemContext()

  function handleMinPriceChange(event){
    itemContext.setMinPrice(event.target.value)
  }

  function handleMaxPriceChange(event){
    itemContext.setMaxPrice(event.target.value)
  }
  
  return (
    <div className={style.price}>
        <input placeholder='Від' onChange={handleMinPriceChange}/>
        <input placeholder='До' onChange={handleMaxPriceChange}/>
    </div>
  )
}
