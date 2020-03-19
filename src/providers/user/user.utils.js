import axios from 'axios'
import User from '../../interface/user.interface';

export const signup = (userData) => {
  return axios.post('/api/users/signup', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};

export const setAuthToken = (token) => {
  if(token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};