import { Form, Formik } from 'formik'
import React from 'react'
import Number from './Number'
import { numberInitialValues, numberValidationSchema } from './Helper'

export default function NumberValidation() {
  return (
    <Formik initialValues={numberInitialValues} validationSchema={numberValidationSchema} onSubmit={values => {alert(`First Number: ${values.firstNumber}\nSecond Number: ${values.secondNumber}`)}}>
        <Form style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Number name="firstNumber" placeholder="-50" label="Negative Integer Number Less Then -100"/>
            <Number name="secondNumber" placeholder="10.5" label="Positive Number Less Then 100"/>
            <button type="submit" style={{height: "10%", width: "40%", fontSize: "3.5vmin", fontFamily: 'JetBrains Mono'}}>Send</button>
        </Form>
    </Formik>
  )
}
