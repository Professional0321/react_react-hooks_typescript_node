import React, { createContext, useState } from 'react';
import { getCollectionSections } from './collection.utils';

export const CollectionContext = createContext({
  getSections: () => {}
})

const CollectionProvider = ({ children }) => {
  const [collectionSections, setCollectionSections] = useState([]);

  const getSections = () => {
    getCollectionSections()
      .then(sections => setCollectionSections(sections.data))
      .catch(error => console.log(error))
  }

  return (
    <CollectionContext.Provider
      value={{
        getSections,
        collectionSections
      }}
    >
      {children}
    </CollectionContext.Provider>
  )
}

export default CollectionProvider;