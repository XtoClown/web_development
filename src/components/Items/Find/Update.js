import React from 'react'
import style from './Header.module.css'
import reloadIcon from '../../../images/reload.png'
import { useItemContext } from '../../Context/ItemsContext'

export default function Update() {
  
  const itemContext = useItemContext()

  return (
    <div className={style.update} onClick={itemContext.getItems}>
      <img src={reloadIcon} alt="find"/>
    </div>
  )
}
