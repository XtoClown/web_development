import React, { useState, useRef } from 'react'
import style from './Nav.module.css'
import csImage from '../../images/cs2.png'
import dotaImage from '../../images/dota.png'

export default function DropDown() {

    const [picked, setPicked] = useState("CS2")
    const dropdownElement = useRef(0)

    const cs = (
        <div className={style.game}>
            <div className={style.gameImage} style={{ backgroundImage: `url(${csImage})` }}></div>
            <div className={style.gameName}>CS2</div>
        </div>
    )

    const dota = (
        <div className={style.game}>
            <div className={style.gameImage} style={{ backgroundImage: `url(${dotaImage})` }}></div>
            <div className={style.gameName} style={{ textIndent: "20%" }}>DOTA2</div>
        </div>
    )

    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState(cs)

    function handleOpen(){
        setOpen(!open)
    }

    function handlePick(option){
        if(option === "CS2"){
            setCurrent(cs)
            setPicked(option)
        }
        if(option === "DOTA2"){
            setCurrent(dota)
            setPicked(option)
        }
        setOpen(false)
    }

  return (
    <div className={style.dropdown}>
        <div className={style.dropdownContent} onClick={handleOpen}>
            {current}
        </div>
        {open && (
            <div className={style.dropdownMenu}>
                <div className={style.dropdownMenuComponent} onClick={() => handlePick("CS2")} ref={dropdownElement} tabIndex="0">
                    <div className={style.game} style={{ backgroundColor: picked === "CS2" ? "#262829" : "transparent" }}>
                        <div className={style.gameImage} style={{ backgroundImage: `url(${csImage})` }}></div>
                        <div className={style.gameName}>CS2</div>
                    </div>
                </div>
                <div className={style.dropdownMenuComponent} onClick={() => handlePick("DOTA2")} ref={dropdownElement} tabIndex="1">
                    <div className={style.game} style={{ backgroundColor: picked === "DOTA2" ? "#262829" : "transparent" }}>
                        <div className={style.gameImage} style={{ backgroundImage: `url(${dotaImage})` }}></div>
                        <div className={style.gameName} style={{ textIndent: "20%" }}>DOTA2</div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
