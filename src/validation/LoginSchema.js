import * as yup from 'yup';


export default yup.object().shape({
    userName: yup
    .string()
    .required('User Name required to log in'),

    password: yup
    .string()
    .required('Password required to login')
})