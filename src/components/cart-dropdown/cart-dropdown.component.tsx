import React, { useContext } from 'react'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../providers/cart/cart.provider';

const CartDropdown: React.FC = () => {
  const { cartItems, toggleHidden } = useContext(CartContext);
  const showCartItems = () => {
    if (cartItems.length > 0) {
      return (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
        ))
      )
    } else {
      return (
        <span className="empty-message">Your cart is empty</span>
      )
    }
  }
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {showCartItems()}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown;  