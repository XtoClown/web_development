import React from 'react'
import { ErrorMessage, Field } from 'formik';
import style from './Auth.module.css'

export default function Input({ name, label, placeholder }) {
  return (
    <div className={style.customInput}>
        <label htmlFor={name}>{label}</label>
        <Field name={name} placeholder={placeholder} className={style.customField}/>
        <ErrorMessage name={name} component="div" className={style.error}/>
    </div>
  )
}
