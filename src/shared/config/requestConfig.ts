import { AxiosRequestConfig } from 'axios';

import { AuthTokenNames } from '@shared/constants';

export const requestConfig = (config: AxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(AuthTokenNames.ACCESS)}`;
  return config;
};
