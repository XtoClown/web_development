import React from 'react'
import style from './ItemsSummary.module.css'
import { useItemsSelectedContext } from '../Context/ItemsSelectedContext'
import { useUserContext } from '../Context/UserContext'

export default function ItemsSummary() {

  const select = useItemsSelectedContext()
  const userContext = useUserContext()

  return (
    <div className={style.container}>
      <div>{userContext.currency[1]}{(parseFloat(select.summaryPrice)*userContext.currency[2]).toFixed(2)}</div>
      <div className={style.numberOfItems}>({select.selected.filter((item) => item !== null).length})</div>
    </div>
  )
}
