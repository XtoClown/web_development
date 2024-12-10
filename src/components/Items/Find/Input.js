  import React, { useEffect, useState } from 'react'
  import style from './Header.module.css'
  import { useItemContext } from '../../Context/ItemsContext'

  export default function Input() {

    const [input, setInput] = useState("")
    const itemContext = useItemContext()

    function handleChange(event){
      const text = event.target.value
      setInput(text)
      itemContext.setFindText(text)
    }
    
    return (
      <div className={style.search}>
        <input type="text" value={input} onChange={handleChange}/>
      </div>
    )
  }
