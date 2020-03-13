import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../crown.svg'

import './header.styles.scss';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../providers/cart/cart.provider';

const Header: React.FC = () => {
  const { hidden } = useContext(CartContext);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/shop">Contact</Link>
        <Link className="option" to="/signin">Sign In</Link>
        <Link className="option" to="/">Cart</Link>
        <CartIcon/>
      </div>
      {hidden ? null : <CartDropdown/>}
    </div>
  )
}

export default Header;