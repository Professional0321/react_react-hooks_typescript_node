import React, { useContext } from 'react';
import './collection-page.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionContext from '../../context/collections/collections.context';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionContext)
  const collection = collections[match.params.collectionId]
  console.log(match.params)
  console.log(collections)
  console.log(collection)
  const { title, items } = collection;
  return ( 
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="items">
      {
        items.filter((item, idx) => idx < 4)
        .map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps}></CollectionItem>
        ))
      }
    </div>
  </div>
  )
}

export default CollectionPage;