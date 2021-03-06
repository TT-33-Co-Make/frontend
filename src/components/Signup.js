import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import StyledButton from '../styles/StyledButton';
import AltFooterStyled from '../styles/AltFooterStyled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

// import axios from 'axios';
import { useHistory } from 'react-router-dom';

import * as yup from 'yup';
import SignupSchema from '../validation/SignupSchema';
import Footer from './Footer';
import axios from 'axios';

// / / / / / Initial Values for Signup Form / / / / / //

const initSignupValues = {
  email: '',
  username: '',
  password: ''
};

const initSignupErrors = {
  email: '',
  username: '',
  password: ''
};

const initDisabled = true;

export default function Signup() {
  // / / / / / Slice of State for User's Signup Data / / / / / //

  const [signupData, setSignupData] = useState(initSignupValues);
  const { push } = useHistory();

  // / / / / / Slice of State for Form Errors / / / / / //

  const [errors, setErrors] = useState(initSignupErrors);

  // / / / / / Slice of State for Button Enablement / / / / / //

  const [disabled, setDisabled] = useState(initDisabled);

  // / / / / / Change Handler for Controlled Inputs & Validation / / / / / //

  const handleChange = (event) => {
    const { name, value } = event.target;

    yup
      .reach(SignupSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: ''
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        });
      });

    setSignupData({ ...signupData, [name]: value });
  };

  // / / / / / Submit Handler for Submission Functionality / / / / / //

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        'https://comake-backend-lambda.herokuapp.com/api/register',
        signupData
      )
      .then((res) => {
        console.log('RETURNED data', res);
        console.log('SIGNUP state', signupData);
        push('/issues');
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    setSignupData(initSignupValues);
  };

  // / / / / / Button Disabled status handler / / / / / //

  useEffect(() => {
    SignupSchema.isValid(signupData).then((valid) => {
      setDisabled(!valid);
    });
  }, [signupData]);

  return (
    <>
      <NavBar />

      <SignUpDiv>
        <div className="text">
          <h2>Sign up here!</h2>
        </div>
                
        <SignupForm onSubmit={handleSubmit}>
                      
          <label>
            Email: <br />
            <Error>{errors.email}</Error> <br />
                            
            <input
              type="email"
              name="email"
              value={signupData.email}
              onChange={handleChange}
            />
                        
          </label>
                      
          <label>
            User Name: <br />
            <Error>{errors.username}</Error> <br />
                            
            <input
              type="text"
              name="username"
              value={signupData.username}
              onChange={handleChange}
            />
                        
          </label>
                      
          <label>
            Password: <br />
            <Error>{errors.password}</Error> <br />
                            
            <input
              type="password"
              name="password"
              value={signupData.password}
              onChange={handleChange}
            />
                        
          </label>
          <StyledButton disabled={disabled}>Sign Me Up!</StyledButton>
                  
        </SignupForm>
      </SignUpDiv>
      <AltFooterStyled>
        <div className="social">
            {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
            {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
            {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
            {/*eslint-disable-next-line*/ }
            <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
        </div>
        <p>Copyright &copy; 2020 - Co-Make</p>
    </AltFooterStyled>
    </>
  );
}

// / / / / / FORM STYLES / / / / / //

const SignUpDiv = styled.div`
  padding-top: 4.3%;
  height: 90vh;
  display: flex;
  justify-content: center;
  /* margin: 30px 3%; */
  background: #333;

  .text {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;

const SignupForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  margin-top: 6%;
  background: #fff;

  input {
    border-radius: 25px;
    border: 1px solid black;
  }

  button {
    &:disabled {
      border: 1px solid red;
      color: red;
      cursor: not-allowed;

      &:hover {
        box-shadow: none;
      }
    }
  }
`;

const Error = styled.span`
  color: red;
`;
