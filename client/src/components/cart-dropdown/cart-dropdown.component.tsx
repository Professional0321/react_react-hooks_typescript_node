import React, { useContext } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../providers/cart/cart.provider';
import ShopItem from '../../interface/shop-item.interface';

interface IProps extends RouteComponentProps<any> {}

const CartDropdown: React.FC<IProps> = ({ history }) => {
  const { cartItems } = useContext(CartContext);
  const showCartItems = () => {
    if (cartItems.length > 0) {
      (cartItems as []).map((cartItem: any, idx: number) => (
        <CartItem key={idx} item={cartItem}/>
      ))
    } else {
      return (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )
    }
  }
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {showCartItems()}
      </CartItemsContainer>
      <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
  )
}

export default withRouter(CartDropdown);  
