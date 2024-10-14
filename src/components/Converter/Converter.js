import React, {useCallback, useState} from 'react'
import Currency from './Currency'
import style from './Converter.module.css'

export default function Converter() {

  const [money, setMoney] = useState("");
  const [currency, setCurrency] = useState("uah");

  const handleUsdChange = useCallback( (money) => {
    setCurrency("usd");
    setMoney(money);
  })

  const handeUahChange = useCallback( (money) => {
    setCurrency("uah");
    setMoney(money);
  })


  function toUsd(uah){
    return uah / 41.38;
  }

  function toUah(usd){
      return usd * 41.38;
  }

  function tryConvert(money, convert){
      const input = parseFloat(money);
      if (Number.isNaN(input)) return '';
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
  }

  const uah = currency === "usd" ? tryConvert(money, toUah) : money;
  const usd = currency === "uah" ? tryConvert(money, toUsd) : money;

  return (
    <div className={style.converter}>
      <Currency currency={"uah"} money={uah} onMoneyChange={handeUahChange}/>
      <Currency currency={"usd"} money={usd} onMoneyChange={handleUsdChange}/>
    </div>
  )
}
