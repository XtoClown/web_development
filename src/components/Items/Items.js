import React, { useEffect } from 'react'
import style from './Items.module.css'
import { useItemContext } from '../Context/ItemsContext'
import Card from './Cards/Card'
import Main from './Cards/Main'

export default function Items() {

  const { items } = useItemContext()

  return (
    <div className={style.container}>
      {items.map((item, index) => (
        item ? 
        (
        <Card key={index} item={item}/>
        ) : (<Main/>)
      ))}
    </div>
  )
}
