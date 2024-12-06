import React from 'react'
import style from './Input.module.css'

export default function Input({ text, price, type, handleInputText, handleInputPrice, handleInputType, handleSubmit }) {
  return (
    <div className={style.inputBody}>
      <div className={style.inputHolder}>
        <input type="text" value={text} onChange={ (e) => handleInputText(e.target.value) } placeholder="Task..." name="entered"/>
        <input type="text" value={price} onChange={ (e) => handleInputPrice(e.target.value) } placeholder="Price..." name="entered"/>
        <input type="text" value={type} onChange={ (e) => handleInputType(e.target.value) } placeholder="Type..." name="entered"/>
      </div>
      <button onClick={handleSubmit} type="button">Add</button>
    </div>
  )
}
