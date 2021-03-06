import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import LoginSchema from '../validation/LoginSchema';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import NavBar from './NavBar';
import StyledButton from '../styles/StyledButton';
import Footer from './Footer';
import axios from 'axios';

import AltFooterStyled from '../styles/AltFooterStyled';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const initLoginValues = {
  username: '',
  password: ''
};

const initLoginErrors = {
  username: '',
  password: ''
};

const initDisabled = true;

const Login = () => {
  // / / / / / Slice of State for User's Signup Data / / / / / //

  const [loginData, setLoginData] = useState(initLoginValues);

  const { setLoginStatus } = useContext(AuthContext);
  const { push } = useHistory();
  //const [authorized, setAuthorized] = useState(AuthContext);

  // / / / / / Slice of State for Form Errors / / / / / //

  const [errors, setErrors] = useState(initLoginErrors);

  // / / / / / Slice of State for Button Enablement / / / / / //

  const [disabled, setDisabled] = useState(initDisabled);

  // / / / / / Change Handler for Controlled Inputs & Validation / / / / / //

  const handleChange = (event) => {
    const { name, value } = event.target;

    yup
      .reach(LoginSchema, name)
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

    setLoginData({ ...loginData, [name]: value });
  };

  // / / / / / Button Disabled status handler / / / / / //

  useEffect(() => {
    LoginSchema.isValid(loginData).then((valid) => {
      setDisabled(!valid);
    });
  }, [loginData]);

  const login = (user) => {
    return axios
      .post('https://comake-backend-lambda.herokuapp.com/api/login', user)
      .then((res) => {
        console.log('LOGIN SUCCESS', res);
        setLoginStatus(true);
        sessionStorage.setItem('token', res.data.token);
        push('/issues');
      })
      .catch((err) => {
        console.log(err, 'ERROR');
      });
  };

  // / / / / / Submit Handler for Login Functionality / / / / / //

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { ...loginData };

    console.log('LOGIN DATA', loginData);

    login(user);

    setLoginData(initLoginValues);
  };

  // / / / / / Above currently returning 401 error - leaving for later use / / / / / //

  return (
    <LoginContainer>
      <NavBar />

      <LoginDiv>
        <div className="text">
          <h2>Log in here!</h2>
        </div>
                
        <LoginForm onSubmit={handleSubmit}>
          <label>
            User Name / Email: <br />
            <Error>{errors.username}</Error> <br />
                            
            <input
              // type="text"
              name="username"
              value={loginData.username}
              onChange={handleChange}
            />
                        
          </label>
                      
          <label>
            Password: <br />
            <Error>{errors.password}</Error> <br />
                            
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
                        
          </label>
          <StyledButton disabled={disabled}>Sign Me Up!</StyledButton>
                  
        </LoginForm>
      </LoginDiv>
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
    </LoginContainer>
  );
};

export default Login;

// / / / / / FORM STYLES / / / / / //

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #333;
  margin-bottom: 0;
`

const LoginDiv = styled.div`
  padding-top: 4.3%;
  height: 90vh;
  display: flex;
  /* justify-content: center; */
  /* margin: 30px 3%; */
  background: #333;
  /* z-index: 0; */

  .text {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  input {
    border-radius: 25px;
    border: 1px solid black;
  }
`;

const LoginForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  /* border-radius: 25px; */
  margin-top: 6%;
  background: #fff;
  /* z-index: 1; */

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
