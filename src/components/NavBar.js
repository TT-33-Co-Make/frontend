import React from 'react';
import NavBarStyled from '../styles/NavBarStyled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const onScroll = (e) => {

    const navbar = e.target.name
    console.log('called ',navbar)

    if(this.oldScroll > this.scrollY) {
        if(window.pageYOffset === 0)
         navbar.classList.add('top');
          navbar.style.transform = 'translateY(0px)'

     } else {
         
             navbar.classList.remove('top');
             navbar.style.transform = 'translateY(-70px)'

     }
  
     this.oldScroll = this.scrollY;
    
}

const NavBar = () => {

    return(
        <div onScroll={onScroll}>
        <NavBarStyled>
            
            <div className='logo'>
             <FontAwesomeIcon icon={faDove} className='i'/><h1>Co-Make</h1>
            </div>
            <nav className='navBar'>
                <ul className='navList'>
                <li>  <a className="navHome" href='/'>Home</a></li>
                  <li> <a className="navLogin" href='/login'>Login</a></li> 
                   <li> <a className="navSignUp" href='/signup'>Sign Up</a></li>
                   <li> <a className="navSignUp" href='/about'>About</a></li>
                   <li> <a className="navSignUp" href='/developers'>Developers</a></li>
                 <li>  <a className="navSignUp" href='/issues'>Issues</a></li>

                </ul>
            </nav>
        </NavBarStyled>
        </div>
    )
}

export default NavBar;