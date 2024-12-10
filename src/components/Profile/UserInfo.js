import React, { useEffect, useState } from 'react'
import style from './UserInfo.module.css'
import { useUserContext } from '../Context/UserContext'
import FavoriteIcon from '@mui/icons-material/Favorite';
import VirtualInventory from './Modal/VirtualInventory';

export default function UserInfo() {

    const userContext = useUserContext()

    let [userAvatar, setAvatar] = useState(null)
    let [username, setUsername] = useState(null)
    let [spent, setSpent] = useState(null)
    let [earned, setEarned] = useState(null)
    let [balance, setBalance] = useState(null)
    let [currency, setCurrency] = useState([])

    useEffect(() => {
        try{
            setAvatar(userContext.user.avatar)
            setUsername(userContext.user.displayName)
            setSpent(parseFloat(userContext.user.spent).toFixed(2))
            setEarned(parseFloat(userContext.user.earned).toFixed(2))
            setBalance(parseFloat(userContext.user.balance).toFixed(2))
            setCurrency(userContext.currency)
        } catch (err){
            console.log("Error: ", err)
        }
    }, [userContext])

    const [open, setOpen] = useState(false)

    function handleOpen(){
        setOpen(true)
    }

    function handleClose(){
        setOpen(false)
    }

  return (
    <div className={style.userContainer}>
        <div className={style.avatar}>
            <img src={userAvatar} alt="av" />
        </div>
        <div className={style.info}>
            <div className={style.username}>
                {username}
            </div>
            <div className={style.finance}>
                <div className={style.earned}>
                    <div className={style.text}>Earned:</div>
                    <div className={style.infoText}>{currency[1]}{(earned*currency[2]).toFixed(2)}</div>
                </div>
                <div className={style.spent}>
                    <div className={style.text}>Spent:</div>
                    <div className={style.infoText}>{currency[1]}{(spent*currency[2]).toFixed(2)}</div>
                </div>
                <div className={style.balance}>
                    <div className={style.text}>Balance:</div>
                    <div className={style.infoText}>{currency[1]}{(balance*currency[2]).toFixed(2)}</div>
                </div>
            </div>
        </div>
        <div className={style.awards}>
            <div className={style.virtualOpen}>
                <FavoriteIcon sx={{ height: "100%", width: "100%", color: "#1D1F20" }} onClick={handleOpen}/>
                <VirtualInventory open={open} handleClose={handleClose}/>
            </div>
        </div>
    </div>
  )
}
