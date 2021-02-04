import React, { useState, useEffect, useContext } from 'react';
import NavBarStyled from '../styles/NavBarStyled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { debounce } from '../utils/helpers';
import { AuthContext } from '../contexts/AuthContext'

const navStyle = {
    zIndex: '10',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    transition: 'top 0.3s'
}

const NavBar = () => {
    const {loginStatus} = useContext(AuthContext)
    console.log('Nav loginStatus:', loginStatus)
    const [oldScroll, setOldScroll] = useState(0);
    const [visible, setVisible] = useState(true);
    
    const handleScroll = debounce(() => {
        const scrollPos = window.pageYOffset;

        setVisible((oldScroll > scrollPos || scrollPos < 10));

        setOldScroll(scrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [oldScroll, visible, handleScroll])

    return(
        <div style={{...navStyle, top: visible ? '0' : '-70px'}}>
        <NavBarStyled>
            
            <div className='logo'>
             <FontAwesomeIcon icon={faDove} className='i'/><h1>Co-Make</h1>
            </div>
            <nav className='navBar'>
                <ul className='navList'>

                <li>  <a className="navHome" href='/'>Home</a></li>
                <li>  <a className="navSignUp" href='/issues'>Issues</a></li>
                <li> <a className="navSignUp" href='/about'>About</a></li>
                {(!loginStatus) ? (<li> <a className="navSignUp" href='/signup'>Sign Up</a></li>) : 
                (<li> <a className="navMyProfile" href='/myProfile'>My Profile</a></li>)}
                {(!loginStatus) ? (<li> <a className="navLogin" href='/login'>Login</a></li>) : 
                (<li> <a className="navLogout" href='/logout'>Logout</a></li>)}

                </ul>
            </nav>
        </NavBarStyled>
        </div>
    )
}

export default NavBar;

// / / / / / CODE GRAVEYARD - RIP / / / / / //

    // const onScroll = (e) => {

    //     const navbar = e.target.name
    //     console.log('called ',navbar)
    
    //     if(this.oldScroll > this.scrollY) {
    //         if(window.pageYOffset === 0){
    //          navbar.classList.add('top');
    //           navbar.style.transform = 'translateY(0px)'
    
    //      }} else {
             
    //              navbar.classList.remove('top');
    //              navbar.style.transform = 'translateY(-70px)'
    
    //      }
      
    //      this.oldScroll = this.scrollY;
        
    // }