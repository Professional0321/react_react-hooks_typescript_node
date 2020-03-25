import React from 'react';

import  './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';
// import CollectionsContext from '../../context/collections/collections.context';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

// const CollectionPreview = ({ match }) => {
//   const collections = useContext(CollectionsContext)
//   const collection = collections[match.params.collectionId]
//   console.log(collection, "COLLECTION")
//   const { title, items } = collection;
//   return ( 
//     <div className="collection-preview">
//       <h1 className="title">{title.toUpperCase()}</h1>
//       <div className="items">
//         {
//           items.filter((item, idx) => idx < 4)
//           .map((item) => (
//             <CollectionItem key={item.id} item={item}></CollectionItem>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

export default CollectionPreview;