import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import StyledButton from '../styles/StyledButton';

import axios from 'axios';
import { useHistory } from 'react-router-dom';


import * as yup from 'yup';
import SignupSchema from '../validation/SignupSchema';


// / / / / / Initial Values for Signup Form / / / / / //

const initSignupValues = {
    email: '',
    username: '',
    password: ''
}

const initSignupErrors = {
    email: '',
    username: '',
    password: ''
}

const initDisabled = true;

export default function Signup(){

    // / / / / / Slice of State for User's Signup Data / / / / / //

    const [signupData, setSignupData] = useState(initSignupValues);
    const { push } = useHistory();

    // / / / / / Slice of State for Form Errors / / / / / //

    const [errors, setErrors] = useState(initSignupErrors);

    // / / / / / Slice of State for Button Enablement / / / / / //

    const [disabled, setDisabled] = useState(initDisabled);

    // / / / / / Change Handler for Controlled Inputs & Validation / / / / / //

    const handleChange = event => {
        const { name, value } = event.target;

        yup
        .reach(SignupSchema, name)
        .validate(value)
        .then(() => {
            setErrors({
                ...errors, [name]: ''
            })
        })
        .catch(err => {
            setErrors({
                ...errors, [name]: err.errors[0]
            });
        });

        setSignupData({...signupData, [name]: value});
    };

    // / / / / / Submit Handler for Submission Functionality / / / / / //

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://comake-backend-lambda.herokuapp.com/api/register', signupData)
        .then(res => {
            console.log(res);
            push('/login');
        })
        .catch(err => {
            console.log(err);
        })
        setSignupData(initSignupValues);
    };


    // / / / / / Button Disabled status handler / / / / / //

    useEffect(() => {
        SignupSchema.isValid(signupData).then(valid => {
            setDisabled(!valid);
        })
    }, [signupData]);

    // / / / / / POST Request, Sends Up User Data For Reuse / / / / / //

    // const postData = (newUser) => {
    //     axios.post('https://co-make-tt-33.herokuapp.com/api/register', newUser)
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // };
    
    // / / / / / ^ Currently returns 401 error, leaving for later use / / / / / //


    return(
    <>
    <NavBar />

    <SignUpDiv>

        <div className='text'>
            <h2>Sign up here!</h2>
        </div>

        <SignupForm onSubmit={handleSubmit}>
            
            <label>Email: <br />
                <Error>{errors.email}</Error> <br />
                <input
                type='email'
                name='email'
                value={signupData.email}
                onChange={handleChange} />
            </label>

            <label>User Name: <br />
                <Error>{errors.username}</Error> <br />
                <input
                type='text'
                name='username'
                value={signupData.username}
                onChange={handleChange} />
            </label>

            <label>Password: <br />
                <Error>{errors.password}</Error> <br />
                <input
                type='password'
                name='password'
                value={signupData.password}
                onChange={handleChange} />
            </label>
            <StyledButton disabled={disabled}>Sign Me Up!</StyledButton>
        </SignupForm>
    </SignUpDiv>
    </>
    )
}

// / / / / / FORM STYLES / / / / / //

const SignUpDiv = styled.div`
    padding-top: 4.3%;
    height: 90vh;
    display: flex;
    justify-content: center;
    /* margin: 30px 3%; */
    background: #333;

    .text{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
  }
`

const SignupForm = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid black;
    margin-top: 6%;
    background: #FFF;

    input{
        border-radius: 25px;
        border: 1px solid black;
    }

    button{
        &:disabled{
            border: 1px solid red;
            color: red;
            cursor: not-allowed;

            &:hover{
                box-shadow: none;
            }
        }
    }
`

const Error = styled.span`
    color: red;
`