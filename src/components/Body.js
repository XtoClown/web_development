import React from 'react'
import style from './Body.module.css'
import ItemsHeader from './Items/ItemsHeader'
import Items from './Items/Items'
import ItemsSummary from './Items/ItemsSummary'
import ItemsSelected from './Items/ItemsSelected'
import ItemsButton from './Items/ItemsButton'
import Filter from './Filter/Filter'

export default function Body() {
  return (
    <div className={style.container}>
        <div className={style.main}>
            <ItemsHeader/>
            <Items/>
            <ItemsSummary/>
            <ItemsSelected/>
            <ItemsButton/>
        </div>
        <div className={style.filter}>
          <Filter/>
        </div>
    </div>
  )
}
