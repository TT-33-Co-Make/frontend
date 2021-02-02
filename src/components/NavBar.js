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
  return (
    <div>
      <nav className="navBar">
        <ul className="navList">
          <Link className="navHome" to="/">
            <li>Home</li>
          </Link>
          <Link className="navLogin" to="/login">
            <li>Login</li>
          </Link>
          <Link className="navSignUp" to="/signup">
            <li>SignUp</li>
          </Link>
          <Link className="developers" to="/developers">
            <li>Developers</li>
          </Link>
          <Link className="issueList" to="/issues">
            <li>Issue List</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
    return(
        <NavBarStyled>
            <div className='logo'>
             <h1>Co-Make</h1>
            </div>
            <nav className='navBar'>
                <ul className='navList'>
    )
}

export default NavBar;

