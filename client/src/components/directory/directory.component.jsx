import React, { useEffect, useContext } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import { DirectoryContainer } from './directory.styles';

import { CollectionContext } from '../../providers/collection/collection.provider';


const Directory = () => {
  const { getSections, collectionSections } = useContext(CollectionContext);

  useEffect(() => {
    getSections();
  }, [])
  
  return (
    <DirectoryContainer>
      {
        collectionSections.map(({ id, ...otherSectionProps }, idx) => (
          <MenuItem key={idx} {...otherSectionProps}/>
        ))
      }
    </DirectoryContainer>
  )
}

export default Directory;