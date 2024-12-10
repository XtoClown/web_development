import React, { useEffect, useState } from 'react'
import { Modal } from '@mui/material'
import style from './AddItem.module.css'
import { useUserContext } from '../../Context/UserContext'
import { useInventoryContext } from '../../Context/InventoryContext'
import { useItemContext } from '../../Context/ItemsContext'

export default function AddItem({ childOpen, handleClose, item }) {

    const userContext = useUserContext()
    const inventoryContext = useInventoryContext()
    const itemContext = useItemContext()

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("Щойно з фабрики")
    const [float, setFloat] = useState(0.01)
    const [quality, setQuality] = useState("FN")
    const [price, setPrice] = useState(0)
    const [fullName, setFullName] = useState("")
    const [image, setImage] = useState("")
    const [rarity, setRarity] = useState("")
    const [type, setType] = useState("")
    
    const lock = Math.floor(Math.random() * 8)

    const [outputItem, setOutputItem] = useState({})

    useEffect(() => {
        try{
            const hash = itemContext.uniqueHash(item)
            console.log("hash", hash)
            setFullName(`${item.weaponName} | ${item.skinName}`)
            setImage(item.image)
            setOutputItem({
                ...item,
                price: parseFloat(price),
                float: float,
                lock: lock,
                quality: quality,
                timestamp: new Date().toISOString(),
                hash: hash,
                owner: userContext.user.userId,
                ownerPhoto: userContext.user.avatar,
                ownerName: userContext.user.displayName
            })
            setRarity(item.rarity)
            setType(item.type)
        } catch (err){
            console.log("Error: ", err)
        }
    }, [userContext, float, quality, price, item])

    useEffect(() => {
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
        }
    }, [rarity, type])

    function handleSelection(option){
        let randomFloat = null
        if(option === "FN"){
            randomFloat = (Math.random() * 0.07).toFixed(7)
            setSelected("Щойно з фабрики")
        }
        if(option === "MW"){
            randomFloat = (Math.random() * (0.15 - 0.07) + 0.07).toFixed(7)
            setSelected("Майже без подряпин")
        }
        if(option === "FT"){
            randomFloat = (Math.random() * (0.37 - 0.15) + 0.15).toFixed(7)
            setSelected("Після бойових випробувань")
        }
        if(option === "WW"){
            randomFloat = (Math.random() * (0.44 - 0.37) + 0.37).toFixed(7)
            setSelected("Із численними подряпинами")
        }
        if(option === "BS"){
            randomFloat = (Math.random() * (1 - 0.44) + 0.44).toFixed(7)
            setSelected("Загартований у боях")
        }
        setFloat(randomFloat)
        setQuality(option)
    }

    function handleAdd(){
        console.log(outputItem)
        inventoryContext.handleAddItem(outputItem)
        handleClose()
    }

  return (
    <Modal
    open={childOpen}
    onClose={handleClose}
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description"
    sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backdropFilter: "none", backgroundColor: "transparent" }} >
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
                    <div className={style.infoText} onClick={() => setOpen(!open)}>{selected}
                        { open && (
                            <div className={style.dropdown}>
                                <div className={style.dropdownElement} onClick={() => handleSelection("FN")}>Factory New</div>
                                <div className={style.dropdownElement} onClick={() => handleSelection("MW")}>Minimal Wear</div>
                                <div className={style.dropdownElement} onClick={() => handleSelection("FT")}>Field-Tested</div>
                                <div className={style.dropdownElement} onClick={() => handleSelection("WW")}>Well-Worn</div>
                                <div className={style.dropdownElement} onClick={() => handleSelection("BS")}>Battle-Scared</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={style.addButton}>
                    <button onClick={handleAdd}>Додати Предмет</button>
                </div>
            </div>
        </div>
    </Modal>
  )
}
