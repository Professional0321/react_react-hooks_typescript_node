import React, { useContext } from 'react';

import  './collection-page.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';
import CollectionsContext from '../../context/collections/collections.context';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext)
  const collection = collections[match.params.collectionId]
  console.log(collections)
  console.log(collection)
  const { title, items } = collection;
  return ( 
    <div className="collection-page">
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