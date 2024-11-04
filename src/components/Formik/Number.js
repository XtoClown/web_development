import { ErrorMessage, Field } from 'formik'
import React from 'react'
import style from './Number.module.css'

export default function Number({ name, label, placeholder }) {
  return (
    <div className={style.holder}>
        <label htmlFor={name}>{label}</label>
        <Field name={name} placeholder={placeholder} className={style.customField}/>
        <ErrorMessage name={name} className={style.error}/>
    </div>
  )
}
