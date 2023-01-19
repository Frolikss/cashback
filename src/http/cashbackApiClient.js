import axios from 'axios';
import { BASE_URL, TOKEN_NAME } from '@constants';

export const cashbackApiClient = axios.create({ withCredentials: true, baseURL: BASE_URL });

cashbackApiClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

cashbackApiClient.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      return Promise.reject('Not authorized');
    }

    localStorage.setItem(TOKEN_NAME, response.data?.loginToken);
    return response;
  },
  (error) => {
    return Promise.reject(error.message);
  }
);
