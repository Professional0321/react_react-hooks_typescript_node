import React from 'react';
import './collection-page.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage: React.FC<any> = ({ match }) => {
  console.log(match)
  return (
    <div className="collection">
      <h2>COLLECTION PAGE</h2>
    </div>
  )
}

export default CollectionPage;