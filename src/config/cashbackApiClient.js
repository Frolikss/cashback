import { requestConfig, responseConfig, responseErrorHandling } from '@config';
import axios from 'axios';

export const cashbackApiClient = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL
});

cashbackApiClient.interceptors.request.use(requestConfig);
cashbackApiClient.interceptors.response.use(responseConfig, responseErrorHandling);
