import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {

    return(
        <div>
            <nav className='navBar'>
                <ul className='navList'>
                    <Link className="navHome" to='/'><li>Home</li></Link>
                    <Link className="navLogin" to='/login'><li>Login</li></Link>
                    <Link className="navSignUp" to='/signup'><li>SignUp</li></Link>
                    <Link className="developers" to='/developers'><li>Developers</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;