import * as yup from 'yup';


export default yup.object().shape({
    username: yup
    .string()
    .required('User Name required to log in'),

    password: yup
    .string()
    .required('Password required to login')
})