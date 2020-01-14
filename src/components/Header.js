import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

 const Header = () => {
     return <header className='header'>
         <Link className='header__logo-container' to='/'>
            <img className='header__logo' src={logo} alt='logo'/>
         </Link>
     </header>
 }

 export default Header;