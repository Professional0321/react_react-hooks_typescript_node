import React, { useContext } from 'react';
import './checkout-item.styles.scss';

import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutItem = ({ cartItem }) => {
  const { cartItems, addItem, removeItem, clearCartItem } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem 
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="quantity">{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearCartItem(cartItem)}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem; 