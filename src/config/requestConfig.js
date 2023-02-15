import { ACCESS_TOKEN } from '@constants';

export const requestConfig = (config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
  return config;
};
