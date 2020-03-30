import React, { useContext } from 'react';

import './collection-item.styles.scss';

import { 
  CollectionItemContainer, 
  AddButton,
  BackgroundImage, 
  CollectionFooterContainer, 
  NameContainer, 
  PriceContainer
} from './collection-item.styles';

import CustomButton from '../custom-button/custom-button.component';
import { CartContext } from '../../providers/cart/cart.provider';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl}></BackgroundImage>
      <CollectionFooterContainer>
        <NameContainer>{ name }</NameContainer>
        <PriceContainer>{ price }</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted="true">Add to Cart</AddButton>
    </CollectionItemContainer>
  )
}

export default CollectionItem;