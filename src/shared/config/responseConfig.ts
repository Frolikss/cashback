import { AxiosResponse } from 'axios';

import { AUTH_ERROR_MESSAGE, AuthTokenNames, EXPIRED_TOKEN_MESSAGE } from '../constants';
import { ResponseError } from '../types/api.response.interfaces';

export const responseConfig = (response: AxiosResponse) => {
  if (response.data?.loginToken) {
    localStorage.setItem(AuthTokenNames.ACCESS, response.data?.loginToken);
  }

  return response;
};

export const responseErrorHandling = (error: unknown) => {
  const err = error as ResponseError;

  if (err?.response?.data.statusCode === 401) {
    const authToken = localStorage.getItem(AuthTokenNames.ACCESS);
    return Promise.reject(authToken ? EXPIRED_TOKEN_MESSAGE : AUTH_ERROR_MESSAGE);
  }
  return Promise.reject(err.response.data.description);
};
