import React from 'react'
import style from './Nav.module.css'

export default function Button({ text }) {
  return (
    <div className={style.button}>
        <div className={style.buttonText}>
            {text}
        </div>
    </div>
  )
}
