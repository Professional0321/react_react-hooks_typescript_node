import axios from 'axios';

const changeResponseForHeroku = {
  headers: {
    'Content-Type': 'application/json',
  }
}

export const getCollectionSections = () => {
  return axios.get('/api/collections/sections', changeResponseForHeroku);
}; 

export const getCollections = () => {
  return axios.get('/api/collections/collection', changeResponseForHeroku);
}

// export const createCollection = (collectionData) => {
//   return axios.post('/api/collections/collection', collectionData)
// };