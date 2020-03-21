import React, { createContext, useState } from 'react';
import { getCollectionSections, getCollections } from './collection.utils';

export const CollectionContext = createContext({
  getSections: () => {},
  getCollectionsItems: () => {},
  collectionSections: [],
  collectionItems: []
  // createCol: (collectionData) => {}
})

const CollectionProvider = ({ children }) => {
  const [collectionSections, setCollectionSections] = useState([]);
  const [collectionItems, setCollectionItems] = useState([]);

  const getSections = () => {
    getCollectionSections()
      .then(sections => setCollectionSections(sections.data))
      .catch(error => console.log(error));
  }

  const getCollectionItems = () => {
    getCollections()
      .then(collections => setCollectionItems(collections.data))
      .catch(error => console.log(error));
  }
  
  // Add Collections to the database
  // const createCol = (collectionData) => {
  //   createCollection(collectionData)
  //     .then(collection => console.log(collection))
  //     // .catch(error => console.log(error));
  // }

  return (
    <CollectionContext.Provider
      value={{
        getSections,
        collectionSections,
        getCollectionItems,
        collectionItems
      }}
    >
      {children}
    </CollectionContext.Provider>
  )
}

export default CollectionProvider;