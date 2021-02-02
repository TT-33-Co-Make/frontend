import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import LoginSchema from '../validation/LoginSchema';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


const initLoginValues = {
    userName: '',
    password: ''
};

const initLoginErrors = {
    userName: '',
    password: ''
}

const initDisabled = true;

const Login = () => {

    // / / / / / Slice of State for User's Signup Data / / / / / //

        const [loginData, setLoginData] = useState(initLoginValues);

        const { push } = useHistory(); 
        //const [authorized, setAuthorized] = useState(AuthContext);


    // / / / / / Slice of State for Form Errors / / / / / //

        const [errors, setErrors] = useState(initLoginErrors);

    // / / / / / Slice of State for Button Enablement / / / / / //

        const [disabled, setDisabled] = useState(initDisabled);

    // / / / / / Change Handler for Controlled Inputs & Validation / / / / / //

    const handleChange = event => {
        const { name, value } = event.target;

        yup
        .reach(LoginSchema, name)
        .validate(value)
        .then(() => {
            setErrors({
                ...errors, [name]: ''
            });
        })
        .catch(err => {
            setErrors({
                ...errors, [name]: err.errors[0]
            });
        });

        setLoginData({...loginData, [name]: value});
    };

    // / / / / / Submit Handler for Login Functionality / / / / / //

    const handleSubmit = event => {
        event.preventDefault();


        const user = {...loginData};
        console.log(loginData)
        login(user);

        setLoginData(initLoginValues);
    };

    // / / / / / Button Disabled status handler / / / / / //


    

    useEffect(() => {
        LoginSchema.isValid(loginData).then(valid => {
            setDisabled(!valid);
        })
    }, [loginData]);

    // / / / / / POST Request for Login / / / / / //

    const login = (user) => {
        axios.post('https://co-make-tt-33.herokuapp.com/api/login', user)
        .then(res => {
            console.log(res);
            push('/issues')
        })
        .catch(err => {
            console.log(err);
        })
    }

    // / / / / / Above currently returning 401 error - leaving for later use / / / / / //


    return(
        <LoginForm onSubmit={handleSubmit}>
            <label>User Name / Email: <br />
                <Error>{errors.userName}</Error> <br />
                <input
                type='text'
                name='userName'
                value={loginData.userName}
                onChange={handleChange} />
            </label>

            <label>Password: <br />
                <Error>{errors.password}</Error> <br />
                <input
                type='password'
                name='password'
                value={loginData.password}
                onChange={handleChange} />
            </label>
            <button>Sign Me Up!</button>
        </LoginForm>
    )
}

export default Login;


const LoginForm = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid black;
    border-radius: 25px;

    input{
        border-radius: 25px;
        border: 1px solid black;
    }

    button{
        border-radius: 25px;
        border: 1px solid black;
        padding: 10px;
        box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.5);
        transition: .3s;
        margin-top: 10px;

        &:hover{
            box-shadow: none;
        }
    }
`

const Error = styled.span`
    color: red;
`