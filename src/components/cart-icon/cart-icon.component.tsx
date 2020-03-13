import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../shopping-bag.svg'
import './cart-icon.styles.scss';

import { CartContext } from '../../providers/cart/cart.provider';

const CartIcon: React.FC = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{cartItemsCount}</span>
    </div>
  )
}

export default CartIcon;