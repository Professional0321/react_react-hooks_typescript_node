import React, { useEffect, useContext } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryContainer } from './directory.styles';
import { CollectionContext } from '../../providers/collection/collection.provider';

import Section from '../../interface/section.interface'

interface IDirectoryProps {}  

const Directory: React.FC<IDirectoryProps> = () => {
  const { getSections, collectionSections } = useContext(CollectionContext);

  useEffect(() => {
    getSections();
  }, [])
  
  return (
    <DirectoryContainer>
      {(collectionSections as Section[]).map(({...otherSectionProps }, idx) => (<MenuItem key={idx} {...otherSectionProps}/>))}
    </DirectoryContainer>
  )
}

export default Directory;