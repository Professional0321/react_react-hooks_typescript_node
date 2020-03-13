import React, { useContext } from 'react';
import './collection-page.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionContext from '../../context/collections/collections.context';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionContext)
  const collection = collections[match.params.collectionId]
  const { title, items } = collection;
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