import React, { useContext } from 'react';

import './checkout.styles.scss';

import CartContext from '../../providers/cart/cart.provider';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext)
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
    </div>
  )
}

export default CheckoutPage;