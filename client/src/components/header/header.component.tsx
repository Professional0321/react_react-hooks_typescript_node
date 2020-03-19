import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../crown.svg';

import './header.styles.scss';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../providers/cart/cart.provider';
import { UserContext } from '../../providers/user/user.provider';

const Header: React.FC = () => {
  const { hidden } = useContext(CartContext);
  const { loggedInStatus, signoutUser }  = useContext(UserContext);
  const renderLoggedInStatus = () => {
    if (loggedInStatus === false) {
      return (
        <Link className="option" to="/signin">Sign In</Link>
      )
    } else {
      return (
        <div className="option" onClick={signoutUser}>Sign Out</div>
      )
    }
  }
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/shop">Contact</Link>
        {renderLoggedInStatus()}
        <CartIcon/>
      </div>
      {hidden ? null : <CartDropdown/>}
    </div>
  )
}

export default Header;