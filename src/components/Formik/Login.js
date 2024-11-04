import React, { useState } from 'react'
import { loginInitialValues, loginValidationSchema } from './Helper'
import { Formik, Form } from 'formik'
import Input from './Input'
import { useUser } from '../User/UserContext';
import { useLoginContext } from '../User/LoginContext';
import style from './Auth.module.css'

export default function Login({ close }) {

    const user = useUser();
    const login = useLoginContext();

    const userEmail = user.email;
    const userPassword = user.password;

    const [error, setError] = useState("")

    function loginHandler(values){
        if(values.email === userEmail && values.password === userPassword){
            login.handleLoggedInChange(true);
            close();
        }
        else{
            setError("Incorrect");
        }
    }


  return (
    <Formik 
    initialValues={loginInitialValues} 
    validationSchema={loginValidationSchema}
    onSubmit={loginHandler}>
        <Form className={style.customForm}>
            <Input name="email" label="Email:" placeholder="example@gmail.com" />
            <Input name="password" label="Password:" placeholder="123123123" />
            <span className={style.error}>{error}</span>
            <button type="submit">Login</button>
        </Form>
    </Formik>
  )
}
