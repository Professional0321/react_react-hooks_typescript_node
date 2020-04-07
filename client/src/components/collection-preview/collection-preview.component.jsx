import React from 'react';
import { withRouter } from 'react-router-dom';

import  './collection-preview.styles.scss';

import { CollectionPreviewContainer, CollectionTitleContainer, PreviewContainer } from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';
// import CollectionsContext from '../../context/collections/collections.context';

const CollectionPreview = ({ title, items, routeName, match, history }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionTitleContainer onClick={() => history.push(`${match.path}/${routeName}`) }>
        {title.toUpperCase()}
      </CollectionTitleContainer>
      <PreviewContainer>
        {items
          .filter((_, idx) => idx < 4)
          .map((item, idx) => (
            <CollectionItem key={idx} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionPreview);