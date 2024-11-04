import * as Yup from 'yup';

export const registrationInitialValues = {
    firstName: "", 
    lastName: "", 
    email: "",
    password: ""
}

export const registrationValidationSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(3, "First Name must be at least three letters long!")
    .required("First Name is required!"),
    lastName: Yup.string().max(18, "Last Name can be a maximum of 18 characters!")
    .matches(/^[A-Z][a-z]{1,9}/, "Last Name must begin with a capital letter!")
    .matches(/(?=.*\d{8})/, "Add the number of your academic record to the end of your last name!")
    .required("Last Name is required!"),
    email: Yup.string()
    .email("Incorrect email address!")
    .required("Email is required!"),
    password: Yup.string()
    .matches(/(?=.*[A-Z])/, "The password must contain at least 1 capital letter!")
    .matches(/(?=.*[@$!%*#?&]{1})/, "The password must contain at least 1 non-symbolic character!")
    .required("Password is required!")
})

export const loginInitialValues = {
    email: "",
    password: ""
}

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
    .email("Incorrect email address!")
    .required("Email is required!"),
    password: Yup.string()
    .matches(/(?=.*[A-Z])/, "The password must contain at least 1 capital letter!")
    .matches(/(?=.*[@$!%*#?&]{1})/, "The password must contain at least 1 non-symbolic character!")
    .required("Password is required!")
})

export const commmentInitialValues = {
    text: "",
}

export const commmentValidationSchema = Yup.object().shape({
    text: Yup.string().min(3, "Please enter some text!").required("Text is required!")
})

export const numberInitialValues = {
    firstNumber: 0,
    secondNumber: 0
}

export const numberValidationSchema = Yup.object().shape({
    firstNumber: Yup.number()
    .negative("The number must be less than zero!")
    .integer("The number must be an integer!")
    .min(-100, "The number must be at least -100!")
    .required("First Number is required!"),
    secondNumber: Yup.number()
    .positive("The number must be more than zero!")
    .max(100, "The number should not exceed 100!")
    .required("Second Number is required!")
})