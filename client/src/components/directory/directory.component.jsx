import React, { useState, useEffect, useContext } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

import { CollectionContext } from '../../providers/collection/collection.provider';

const Directory = () => {
  const { getSections, collectionSections } = useContext(CollectionContext);

  useEffect(() => {
    getSections();
  }, [])
  
  return (
    <div className="directory-menu">
      {
        collectionSections.map(({ id, ...otherSectionProps }, idx) => (
          <MenuItem key={idx} {...otherSectionProps}/>
        ))
      }
    </div> 
  )
}

// class Directory extends Component {
//   constructor() {
//     super()
//     this.state = { 
//       sections: SECTIONS_DATA
//     }
//   }


//   render() {
//   } 
// }

export default Directory;