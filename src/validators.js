import * as Yup from "yup";

export const passFormValidation =  
        Yup.object({
            name : Yup.string().required('Please enter your name.').min(2, 'Invalid Name'),
            email: Yup.string().email("Invalid email address!").required("Please enter an email address."),
            contact : Yup.string().required('This is a required field.').min(10,'Invalid contact!'),
            transactionId : Yup.string().required('This is a required field.').min(5,'Invalid transaction ID!'),
        });

export const contactFormValidators =  
        Yup.object({
            name : Yup.string().required('Please enter your name.').min(2, 'Invalid Name'),
            email: Yup.string().email("Invalid email address!").required("Please enter an email address."),
            body : Yup.string().required('This is a required field.'),
        });