import React, { useEffect, useState } from 'react'
import { useUserContext } from '../Context/UserContext';
import style from './Nav.module.css'
import axios from 'axios';

export default function Currency() {

    const [currencyData, setCurrencyData] = useState(null)

    const [open, setOpen] = useState(false)

    const userContext = useUserContext()

    async function getCurrencyFromAPI() {
        try {
            const response = await axios.get('http://localhost:5000/currency');
            setCurrencyData(response.data.data);
        } catch (error) {
            console.error('GET From Currency API Error:', error);
        }
    }

    function handleCurrencyChange(currency, mark){
        userContext.setCurrency([currencyData[currency]["code"], mark, currencyData[currency]["value"]])
    }

    useEffect(() => {
        getCurrencyFromAPI()
    }, [])

    return (
        <div className={style.currency} onClick={() => setOpen(!open)}>
            <div className={style.balance}>
                {userContext.currency[1]}{(parseFloat(userContext.user.balance)*userContext.currency[2]).toFixed(2)}
            </div>
            { open && (
                <div className={style.currencyDropdown}>
                    <div className={style.currencyDropdownElement} onClick={() => handleCurrencyChange("USD", "$")}>$ USD</div>
                    <div className={style.currencyDropdownElement} onClick={() => handleCurrencyChange("UAH", "₴")}>₴ UAH</div>
                    <div className={style.currencyDropdownElement} onClick={() => handleCurrencyChange("EUR", "€")}>€ EUR</div>
                    <div className={style.currencyDropdownElement} onClick={() => handleCurrencyChange("GBP", "£")}>£ GBP</div>
                </div>
            )}
        </div>
    );
  }
