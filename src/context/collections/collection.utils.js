import axios from 'axios';

export const getCollectionSections = () => {
  return axios.get('/api/collections/sections');
}