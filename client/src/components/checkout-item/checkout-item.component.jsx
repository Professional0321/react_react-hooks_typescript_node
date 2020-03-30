import React, { useContext } from 'react';
import './checkout-item.styles.scss';

import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer} from './checkout-item.styles';

import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutItem = ({ cartItem }) => {
  const { addItem, removeItem, clearCartItem } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem 
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item"></img>
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="quantity">{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearCartItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem; 