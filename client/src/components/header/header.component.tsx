import React, { useContext } from 'react';
import { ReactComponent as Logo } from '../../crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

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
        <OptionLink as='div' onClick={signoutUser}>Sign Out</OptionLink>
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