import * as yup from 'yup';

export default yup.object().shape({
    email: yup
    .string()
    .email('Must be a valid email address')
    .required('Email address is required'),

    username: yup
    .string()
    .required('User Name is required')
    .min(3, 'User Name must be at least 3 chars long'),

    password: yup
    .string()
    .required('Password is required')
    // .matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/, 'Password must contain at least 1 number, 1 letter and 1 special character')
    .min(5, 'Password must contain at least 5 chars')
})

// / / / / / Commented out the Regex until we're ready to implement it / / / / / //