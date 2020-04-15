import axios from 'axios';

export const getCollectionSections = () => {
  return axios.get('/api/collections/sections');
}; 

export const getCollections = () => {
  return axios.get('/api/collections/collection');
}

// export const createCollection = (collectionData) => {
//   return axios.post('/api/collections/collection', collectionData)
// };