import React, {useState, useEffect, useRef} from 'react'
import style from './Currency.module.css'

export default function Currency(props) {

  const currencyNames = {
    usd: "US Dollar",
    uah: "Ukraine Hryvnia"
  }

  const money = props.money;
  const currency = props.currency;


  function handleMoneyChange(event){
    props.onMoneyChange(event.target.value);
  }

  const [focus, setFocus] = useState(false);
  const labelRef = useRef(null);
  const inputRef = useRef(null);
  const [locker, setLocker] = useState(true);
  const [color, setColor] = useState("#d78bf7");

  useEffect( () => {
    if(!locker){
      let temp = labelRef.current.style.color;
      labelRef.current.style.color = color;
      inputRef.current.style.color = color;
      setColor(temp);
    }
  }, [focus])

  function handleInputFocus(){
    setLocker(false);
    setFocus(true);
  }

  function handleInputBlur(){
    setFocus(false);
  }

  return (
    <div className={style.currency}>
      <label ref={labelRef} for="moneyInput">{currencyNames[currency]}</label>
      <input ref={inputRef} id="moneyInput" onFocus={handleInputFocus} onBlur={handleInputBlur} value={money} onChange={handleMoneyChange}/>
    </div>
  )
}
