import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>

        <li><Link to='/'>Login</Link></li>
        <li><Link to='/tacos'>Tacos</Link></li>
      </ul>
    </header>
  )
}

export default Header;