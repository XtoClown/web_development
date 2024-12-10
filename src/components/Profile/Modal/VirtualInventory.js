import React, { useEffect, useState } from 'react'
import { Modal, Box, Typography } from '@mui/material'
import style from './VirtualInventory.module.css'
import { useInventoryContext } from '../../Context/InventoryContext'
import VirtualItem from './VirtualItem'
import AddItem from './AddItem'

export default function VirtualInventory({ open, handleClose }) {

    const inventoryContext = useInventoryContext()
    const [text, setText] = useState('')
    const [items, setItems] = useState([])
    const [childOpen, setChildOpen] = useState(false)
    const [selected, setSelected] = useState(null)

    function handleFind(event){
        setText(event.target.value)
    }

    function handleChildOpen(item){
        setSelected(item)
        setChildOpen(true)
    }

    function handleChildClose(){
        setChildOpen(false)
    }

    useEffect(() => {
        let list = inventoryContext.items

        if(text !== ""){
            list = list.filter(item => item.fullName.toLowerCase().includes(text.toLowerCase()));
        }

        setItems(list)
    }, [text, inventoryContext.items])

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "" }}
    >
        <div className={style.container}>
            <div className={style.header}>
                <input value={text} onChange={handleFind}/>
            </div>
            <div className={style.body}>
                {items.map((item, index) => (
                    <div className={style.card}>
                        <VirtualItem item={item} onClick={() => handleChildOpen(item)}/>
                    </div>
                ))}
            </div>
            <AddItem childOpen={childOpen} handleClose={handleChildClose} item={selected}/>
        </div>
    </Modal>
  )
}
