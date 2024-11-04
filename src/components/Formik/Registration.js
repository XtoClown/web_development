import React from 'react'
import { Formik, Form} from 'formik';
import Input from './Input';
import { registrationInitialValues, registrationValidationSchema } from './Helper';
import { useSetUser } from '../User/UserContext';
import style from './Auth.module.css'

export default function Registration() {

    const setUser = useSetUser();

    function registrationHandler(values){
        setUser.handleSetFirstName(values.firstName);
        setUser.handleSetLastName(values.lastName);
        setUser.handleSetEmail(values.email);
        setUser.handleSetPassword(values.password);
    }

  return (
    <Formik 
    initialValues={registrationInitialValues} 
    validationSchema={registrationValidationSchema}
    onSubmit={registrationHandler}>
        <Form className={style.customForm}>
            <Input name="firstName" label="First Name:" placeholder="Some Name" />
            <Input name="lastName" label="Last Name:" placeholder="Some Name" />
            <Input name="email" label="Email:" placeholder="example@gmail.com" />
            <Input name="password" label="Password:" placeholder="123123123" />
            <button type="submit">Registration</button>
        </Form>
    </Formik>
  )
}
