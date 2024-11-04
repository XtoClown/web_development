import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { commmentInitialValues, commmentValidationSchema } from './Helper';
import style from '../Comment/AddNewComment.module.css';

export default function Comment({ submitHandler, fieldStyle, buttonStyle }) {

  return (
    <Formik initialValues={commmentInitialValues} validationSchema={commmentValidationSchema} onSubmit={submitHandler}>
        <Form className={style.newComment}>
            <Field name="text" style={fieldStyle} className={style.customTextarea}/>
            <ErrorMessage name="text" component="div" className={style.error}/>
            <button type="submit" style={buttonStyle} >Comment</button>
        </Form>
    </Formik>
  )
}
