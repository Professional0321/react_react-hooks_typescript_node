import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../providers/cart/cart.provider';


const CartDropdown: React.FC<any> = ({ history }) => {
  const { cartItems } = useContext(CartContext);
  const showCartItems = () => {
    if (cartItems.length > 0) {
      return (cartItems.map((cartItem, idx) => 
        <CartItemsContainer key={idx}><CartItem key={idx} item={cartItem}/></CartItemsContainer>
      ))
    } else {
      return (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )
    }
  }
  return (
    <CartDropdownContainer>
      {showCartItems()}
      <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
  )
}

export default withRouter(CartDropdown);  
