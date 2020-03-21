import React, { useContext } from 'react';
import './collection-page.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionContext } from '../../providers/collection/collection.provider';

const CollectionPage = ({ match }) => {
  const { collectionItems } = useContext(CollectionContext)
  const collection = collectionItems[match.params.collectionId]
  const { title, items } = collection;
  console.log(collection)
  return ( 
    <div className="collection-page">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="items">
      {
        items.filter((item, idx) => idx < 5)
        .map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))
      }
    </div>
  </div>
  )
}

export default CollectionPage;