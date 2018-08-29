import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css'


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Login</Link></li>
          <li><Link to='/tacos'>Tacos</Link></li>
          <li><Link to='/restaurant'>Find Restaurant</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;