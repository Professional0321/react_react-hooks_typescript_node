import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../crown.svg'

import './header.styles.scss';

const Header: React.FC = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo/>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">Shop</Link>
      <Link className="option" to="/shop">Contact</Link>
      <Link className="option" to="/signin">Sign In</Link>
      <Link className="option" to="/">Cart</Link>
    </div>
  </div>
)

export default Header;