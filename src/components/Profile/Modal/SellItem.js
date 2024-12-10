import React, { useEffect, useState } from 'react'
import style from './SellItem.module.css'
import { Modal } from '@mui/material'
import { useInventoryContext } from '../../Context/InventoryContext'
import { useUserContext } from '../../Context/UserContext'

export default function SellItem({ open, handleClose, item }) {

  const inventoryContext = useInventoryContext()
  const userContext = useUserContext()

  const [float, setFloat] = useState(0)
  const [quality, setQuality] = useState("")
  const [price, setPrice] = useState("")
  const [fullName, setFullName] = useState("")
  const [image, setImage] = useState("")
  const [rarity, setRarity] = useState("")
  const [type, setType] = useState("")

  useEffect(() => {
    try{
      setImage(item.image)
      setFullName(item.fullName)
      setRarity(item.rarity)
      setQuality(item.quality)
      setType(item.type)
    } catch (err){
      console.log("Error: ", err)
    }
  }, [item])

  useEffect(() => {
    if(quality === "FN"){
      setQuality("Щойно з фабрики")
    }
    if(quality === "MW"){
      setQuality("Майже без подряпин")
    }
    if(quality === "FT"){
      setQuality("Після бойових випробувань")
    }
    if(quality === "WW"){
      setQuality("Із численними подряпинами")
    }
    if(quality === "BS"){
      setQuality("Загартований у боях")
    }
    if(rarity === "Contraband"){
        setRarity("Контрабанда")
    }
    if(rarity === "Covert"){
        setRarity("Надсекретна зброя")
    }
    if(rarity === "Classified"){
        setRarity("Секретна зброя")
    }
    if(rarity === "Restricted"){
        setRarity("Зброя спецслужб")
    }
    if(rarity === "Mil-Spec"){
        setRarity("Промислового гатунку")
    }
    if(rarity === "Industrial Grade"){
        setRarity("Армійського гатунку")
    }
    if(rarity === "Consumer Grade"){
        setRarity("Роздрібленого гатунку")
    }
    if(type === "Knife"){
        setType("Ніж")
    }
    if(type === "Rifle" && !fullName.startsWith("AWP")){
        setType("Гвинтівка")
    }
    if(type === "Rifle" && fullName.startsWith("AWP")){
        setType("Снайперська рушниця")
    }
    if(type === "Pistol"){
        setType("Пістолет")
    }}, [rarity, type])


  function handleTextChange(event){
    setPrice(event.target.value)
  }

  function handleItemSell(){
    const itemPrice = (parseFloat(price) / userContext.currency[2]).toFixed(2)
    inventoryContext.handleRemoveItem(item, itemPrice)
  }

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby={`modal-${item.hash}-title`}
    aria-describedby={`modal-${item.hash}-description`}
    sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
    >
      <div className={style.container}>
        <div className={style.item}>
          <div className={style.skin} style={{ backgroundImage: `url(${image})` }}></div>
          <div className={style.skinName}>{fullName}</div>
        </div>
        <div className={style.info}>
          <div className={style.rarity}>
            <div className={style.infoField}>Якість: </div>
            <div className={style.infoText}>{rarity}</div>
          </div>
          <div className={style.type}>
            <div className={style.infoField}>Тип: </div>
            <div className={style.infoText}>{type}</div>
          </div>
          <div className={style.quality}>
            <div className={style.infoField}>Вигляд: </div>
            <div className={style.infoText}>{quality}</div>
          </div>
          <div className={style.price}>
            <div className={style.infoField}>Ціна: </div>
            <div className={style.currency}>{userContext.currency[1]}</div>
            <input type="number" value={price} onChange={handleTextChange}/>
          </div>
          <div className={style.sell}>
            <button onClick={handleItemSell}>Виставити Лот</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
