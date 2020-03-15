import React, { useContext } from 'react';
import './checkout-item.styles.scss';

import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutItem = ({ cartItem }) => {
  const { cartItems, addItem, removeItem } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem 
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <span className="name">{name}</span>
      <div onClick={() => removeItem(this.cartItem)}></div>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItems, this.cartItem)}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem; 