import React from 'react';
import { Route } from 'react-router-dom'; 
import './shop.styles.scss';
// import SHOP_DATA from '../../context/collections/shop.data';

// import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection-page.component';

const ShopPage = ({ match }) => {
  // console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
    </div>
  )
}

// class ShopPage extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       collections: SHOP_DATA
//     }
//   }

//   render() {
//     const { collections } = this.state
//     return (
//       <div className="shop-page">
//         <Route exact path={} component={CollectionPreview}></Route>
//         {/* {collections.map(({id, ...otherCollectionProps}) => (
//           <CollectionPreview
//             {...this.props}
//             key={id}
//             {...otherCollectionProps}
//           />
//         ))} */}
//       </div>
//     )
//   }
// }

export default ShopPage;