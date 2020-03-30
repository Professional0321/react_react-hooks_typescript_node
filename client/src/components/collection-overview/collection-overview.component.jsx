import React, { useContext, useEffect } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionOverviewContainer } from './collection-overview.styles';

import { CollectionContext } from '../../providers/collection/collection.provider';

const CollectionsOverview = ( ) => {
  const { getCollectionItems, collectionItems } = useContext(CollectionContext);

  useEffect(() => {
    getCollectionItems();
  }, [])
  
  return (
    <CollectionOverviewContainer>
      {collectionItems.map(({ id, ...otherCollectionProps }, idx) => (
        <CollectionPreview key={idx} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  )
};

export default CollectionsOverview;