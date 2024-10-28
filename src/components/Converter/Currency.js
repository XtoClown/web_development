import React, {useState, useEffect, useRef} from 'react'
import style from './Currency.module.css'
import { useThemeContext } from '../ThemeContext/ThemeContext';

export default function Currency(props) {

  const theme = useThemeContext();

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
  const [color, setColor] = useState(theme.highlightColor);

  useEffect( () => {
    if(!locker){
      let temp = labelRef.current.style.color;
      labelRef.current.style.color = color;
      inputRef.current.style.color = color;
      setColor(temp);
    }
  }, [focus, theme.highlightColor, theme.decorColor])

  function handleInputFocus(){
    setLocker(false);
    setFocus(true);
  }

  function handleInputBlur(){
    setFocus(false);
  }

  return (
    <div className={style.currency}>
      <label ref={labelRef} for="moneyInput" style={{ color: theme.decorColor }}>{currencyNames[currency]}</label>
      <input ref={inputRef} id="moneyInput" onFocus={handleInputFocus} onBlur={handleInputBlur} value={money} onChange={handleMoneyChange} style={{ backgroundColor: theme.secondaryColor, borderColor: theme.decorColor, color: theme.decorColor }}/>
    </div>
  )
}
