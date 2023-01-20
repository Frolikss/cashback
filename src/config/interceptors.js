import { cashbackApiConfig } from '@config';
import { cashbackApiResponse } from '@config';

export const requestInterceptor = (client) => {
  client.interceptors.request.use(cashbackApiConfig);
};

export const responseInterceptor = (client) => {
  client.interceptors.response.use(cashbackApiResponse, (error) => {
    return Promise.reject(error.message);
  });
};
