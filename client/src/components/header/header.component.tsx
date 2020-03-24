import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../crown.svg';

import './header.styles.scss';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles'

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
        <OptionLink to="/signin">Sign In</OptionLink>
      )
    } else {
      return (
        <OptionDiv onClick={signoutUser}>Sign Out</OptionDiv>
      )
    }
  }
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo/>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {renderLoggedInStatus()}
        <CartIcon/>
      </OptionsContainer>
      {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
  )
}

export default Header;