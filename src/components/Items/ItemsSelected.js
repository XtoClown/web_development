import React from 'react'
import style from './ItemsSelected.module.css'
import { useItemsSelectedContext } from '../Context/ItemsSelectedContext'
import SelectedItem from './Selected/SelectedItem'
import SelectedPlaceholder from './Selected/SelectedPlaceholder'

export default function ItemsSelected() {

  const selected = useItemsSelectedContext()

  return (
    <div className={style.container}>
      {selected.selected.map((item, index) => (
        item ? (
          <SelectedItem key={index} item={item}/>
        ) : <SelectedPlaceholder/>
      ))}
    </div>
  )
}
