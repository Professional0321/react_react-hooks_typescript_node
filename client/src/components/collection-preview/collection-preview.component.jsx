import React from 'react';
import { withRouter } from 'react-router-dom';

import  './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';
// import CollectionsContext from '../../context/collections/collections.context';

const CollectionPreview = ({ title, items, routeName, match, history }) => (
  <div className='collection-preview'>
    <h1 className='title' onClick={() => history.push(`${match.path}/${routeName}`) }>
      {title.toUpperCase()}
    </h1>
    <div className='preview'>
      {items
        .filter((_, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);