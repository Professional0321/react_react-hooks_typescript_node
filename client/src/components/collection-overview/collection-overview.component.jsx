import React, { useContext, useEffect } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

// import CollectionContext from '../../context/collections/collections.context';
import { CollectionContext } from '../../providers/collection/collection.provider';

const CollectionsOverview = ( ) => {
  // const collections = Object.values(useContext(CollectionContext))
  const { getCollectionItems, collectionItems } = useContext(CollectionContext);

  useEffect(() => {
    getCollectionItems();
  }, [])
  return (
    <div className='collections-overview'>
      {collectionItems.map(({ id, ...otherCollectionProps }, idx) => (
        <CollectionPreview key={idx} {...otherCollectionProps} />
      ))}
    </div>
  )
};

export default CollectionsOverview;