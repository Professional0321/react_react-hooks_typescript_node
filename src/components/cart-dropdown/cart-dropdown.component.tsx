import React from 'react'

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown: React.FC = () => (
  <div className="cart-dropdown">
    <div className="car-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default CartDropdown;