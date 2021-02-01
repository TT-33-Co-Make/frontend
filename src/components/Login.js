import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


const initLoginValues = {
    userName: '',
    password: ''
};

const Login = () => {

    // / / / / / Slice of State for User's Signup Data / / / / / //

        const [loginData, setLoginData] = useState(initLoginValues);
        const { push } = useHistory(); 
        //const [authorized, setAuthorized] = useState(AuthContext);

    // / / / / / Change Handler for Controlled Inputs / / / / / //

    const handleChange = event => {
        const { name, value } = event.target;

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

    // / / / / / POST Request for Login / / / / / //

    const login = (user) => {
        axios.post('https://co-make-tt-33.herokuapp.com/api/login', user)
        .then(res => {
            console.log(res);
            // push('/issues')     // Sends to the issue section peter is working on OR can send to user profile.
        })
        .catch(err => {
            console.log(err);
        })
    }

    // / / / / / Above currently returning 401 error - leaving for later use / / / / / //


    return(
        <LoginForm onSubmit={handleSubmit}>
            <label>User Name / Email: <br />
                <input
                type='text'
                name='userName'
                value={loginData.userName}
                onChange={handleChange} />
            </label>

            <label>Password: <br />
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

// / / / / / Basic Styles for Login Form Alone / / / / / //
// / / / / / Using PX Until Confirmed Exact Usage of Responsive Units / / / / / //

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