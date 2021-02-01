import React, { useState } from 'react';
import styled from 'styled-components';
// import axios from 'axios';

// / / / / / Initial Values for Signup Form / / / / / //

const initSignupValues = {
    email: '',
    userName: '',
    password: ''
}

export default function Signup(){

    // / / / / / Slice of State for User's Signup Data / / / / / //

    const [signupData, setSignupData] = useState(initSignupValues)

    // / / / / / Change Handler for Controlled Inputs / / / / / //

    const handleChange = event => {
        const { name, value } = event.target;

        setSignupData({...signupData, [name]: value});
    };

    // / / / / / Submit Handler for Submission Functionality / / / / / //

    const handleSubmit = event => {
        event.preventDefault();

        // const newUser = {...signupData};

        // postData(newUser);
        setSignupData(initSignupValues);
    };

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
                <input
                type='email'
                name='email'
                value={signupData.email}
                onChange={handleChange} />
            </label>

            <label>User Name: <br />
                <input
                type='text'
                name='userName'
                value={signupData.userName}
                onChange={handleChange} />
            </label>

            <label>Password: <br />
                <input
                type='password'
                name='password'
                value={signupData.password}
                onChange={handleChange} />
            </label>
            <button>Sign Me Up!</button>
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