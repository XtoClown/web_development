import React, { useEffect, useState } from 'react'
import style from './FilterComponent.module.css'
import { useItemContext } from '../../Context/ItemsContext'
import debounce from 'lodash.debounce'

export default function Float() {


  const itemContext = useItemContext()

  function handleMinFloatChange(event){
    itemContext.setMinFloat(event.target.value)
  }

  function handleMaxFloatChange(event){
    itemContext.setMinFloat(event.target.value)
  }
  
  return (
    <div className={style.float}>
        <input placeholder='Від' onChange={handleMinFloatChange}/>
        <input placeholder='До' onChange={handleMaxFloatChange}/>
    </div>
  )
}
