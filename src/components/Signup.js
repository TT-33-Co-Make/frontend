import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import SignupSchema from '../validation/SignupSchema';
// import axios from 'axios';

// / / / / / Initial Values for Signup Form / / / / / //

const initSignupValues = {
    email: '',
    userName: '',
    password: ''
}

const initSignupErrors = {
    email: '',
    userName: '',
    password: ''
}

const initDisabled = true;

export default function Signup(){

    // / / / / / Slice of State for User's Signup Data / / / / / //

    const [signupData, setSignupData] = useState(initSignupValues)

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

        // const newUser = {...signupData};

        // postData(newUser);
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
                <Error>{errors.userName}</Error> <br />
                <input
                type='text'
                name='userName'
                value={signupData.userName}
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
            <button disabled={disabled}>Sign Me Up!</button>
        </SignupForm>
    )
}

// / / / / / Basic Styles for Signup Form Alone / / / / / //
// / / / / / Using PX Until Confirmed Exact Usage of Responsive Units / / / / / //

const SignupForm = styled.form`
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