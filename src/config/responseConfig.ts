import { AxiosResponse } from 'axios';
import { ACCESS_TOKEN, AUTH_ERROR_MESSAGE, EXPIRED_TOKEN_MESSAGE } from '@constants';
import { ResponseError } from '@interfaces';

export const responseConfig = (response: AxiosResponse) => {
  if (response.data?.loginToken) {
    localStorage.setItem(ACCESS_TOKEN, response.data?.loginToken);
  }

  return response;
};

export const responseErrorHandling = (error: ResponseError) => {
  if (error?.response?.data.statusCode === 401) {
    const authToken = localStorage.getItem(ACCESS_TOKEN);
    return Promise.reject(authToken ? EXPIRED_TOKEN_MESSAGE : AUTH_ERROR_MESSAGE);
  }
  return Promise.reject(error.response.data.description);
};
