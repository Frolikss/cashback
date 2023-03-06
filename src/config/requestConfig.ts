import { AxiosRequestConfig } from 'axios';
import { ACCESS_TOKEN } from '@constants';

export const requestConfig = (config: AxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
  return config;
};
