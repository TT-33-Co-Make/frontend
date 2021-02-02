import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDove } from '@fortawesome/free-solid-svg-icons'

const NavBarStyled = styled.div` 
    margin: 0 30px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navList {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
    }
    .navList a {
        text-decoration: none;
        color: black;
        padding: 0 50px;
        font-size: 1rem;
    }
    .logo{
       padding-left: 20px;
    }
`;

const NavBar = () => {

    return(
        <NavBarStyled>
            <div className='logo'>
             <h1>Co-Make</h1>
            </div>
            <nav className='navBar'>
                <ul className='navList'>
                  <li>  <a className="navHome" href='/'>Home</a></li>
                  <li> <a className="navLogin" href='/login'>Login</a></li> 
                   <li> <a className="navSignUp" href='/signup'>Sign Up</a></li>
                   <li> <a className="navSignUp" href='/signup'>About</a></li>
                 <li>   <a className="navSignUp" href='/signup'>Issues</a></li>
                </ul>
            </nav>
        </NavBarStyled>
    )
}

export default NavBar;