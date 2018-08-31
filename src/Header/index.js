import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css'


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/auth/login'>Login</Link></li>
          <li><Link to='/auth/register'>Register</Link></li>
          <li><Link to='/tacos'>Tacos</Link></li>
          <li><Link to='/search'>Find Restaurant</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;