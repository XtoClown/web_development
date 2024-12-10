import React, { useEffect, useState } from 'react'
import style from './ItemsButton.module.css'
import { useUserContext } from '../Context/UserContext'
import { useItemContext } from '../Context/ItemsContext'
import { useItemsSelectedContext } from '../Context/ItemsSelectedContext'
import { useInventoryContext } from '../Context/InventoryContext'

export default function ItemsButton() {

  const itemsSelectedContext = useItemsSelectedContext()
  const inventoryContext = useInventoryContext()
  const userContext = useUserContext()

  async function handleClick(){
  }

  const [condition, setCondition] = useState(false)

  useEffect(() => {
    if(userContext.user) { setCondition(parseFloat(userContext.user.balance) >= parseFloat(itemsSelectedContext.summaryPrice)) }
  }, [userContext.user])

  async function handleClick() {
    const selectedItems = itemsSelectedContext.selected.filter((item) => item !== null)
    itemsSelectedContext.handleTransaction()
    await inventoryContext.handleItemBought(selectedItems)
  }

  return (
    <div className={style.container}>
      <button disabled={!condition} onClick={handleClick}>КУПИТИ</button>
    </div>
  )
}
