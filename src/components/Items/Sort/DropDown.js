import React, { useState } from 'react'
import style from './DropDown.module.css'
import { useItemContext } from '../../Context/ItemsContext'

export default function DropDown() {

  const itemContext = useItemContext()

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("Default")
  const [optionText, setOptionText] = useState("За замовченням")

  function handleOpen(){
    setOpen(!open)
  }

  function handleSelection(option){
    setSelected(option)
    setOpen(false)
    itemContext.setSorted(option)
    if(option === "Default"){
      setOptionText("За замовченням")
    }
    if(option === "PriceFromMax"){
      setOptionText("Дата: Спочатку нові")
    }
    if(option === "PriceFromMin"){
      setOptionText("Дата: Спочатку старі")
    }
    if(option === "PriceFromMax"){
      setOptionText("Ціна: Від найнижчої")
    }
    if(option === "PriceFromMin"){
      setOptionText("Ціна: Від найдорожчої")
    }
    if(option === "FloatFromMax"){
      setOptionText("Флот: Від Найнижчого")
    }
    if(option === "FloatFromMin"){
      setOptionText("Флот: Від Найвищого")
    }
  }

  return (
    <div className={style.container} onClick={handleOpen}>
      <div className={style.smallText}>Сортувати за</div>
      <div className={style.sortCriteria}>{optionText}</div>

      {open && (
        <div className={style.dropdownMenu}>
          <div className={style.dropdownMenuComponent} onClick={() => handleSelection("Default")}> За замовченням</div>
          <div className={style.dropdownMenuComponent} onClick={() => handleSelection("DataFromNew")}>Дата: Спочатку нові</div>
          <div className={style.dropdownMenuComponent} onClick={() => handleSelection("DataFromOld")}>Дата: Спочатку старі</div>
          <div className={style.dropdownMenuComponent} onClick={() => handleSelection("PriceFromMin")}>Ціна: Від найнижчої</div>
          <div className={style.dropdownMenuComponent} onClick={() => handleSelection("PriceFromMax")}>Ціна: Від найдорожчої</div>
          <div className={style.dropdownMenuComponent} onClick={() => handleSelection("FloatFromMin")}>Флот: Від Найнижчого</div>
          <div className={style.dropdownMenuComponent} onClick={() => handleSelection("FloatFromMax")}>Флот: Від Найвищого</div>
        </div>
      )}
    </div>
  )
}
