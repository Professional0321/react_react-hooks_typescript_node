import React, { useContext } from 'react';

import './checkout.styles.scss';

import { CartContext } from '../../providers/cart/cart.provider';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = () => {
  const { cartItems, totalCost } = useContext(CartContext);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}
      <div className="total">
        <span>Total: ${totalCost} </span>
      </div>
    </div>
  )
}

export default CheckoutPage;