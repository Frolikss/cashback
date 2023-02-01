import { AUTH_TOKEN, AUTH_ERROR_MESSAGE, EXPIRED_TOKEN_MESSAGE } from '@constants';

export const responseConfig = (response) => {
  if (response.data?.loginToken) {
    localStorage.setItem(AUTH_TOKEN, response.data?.loginToken);
  }

  return response;
};

export const responseErrorHandling = (error) => {
  if (error?.response?.data?.statusCode === 401) {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return Promise.reject(authToken ? EXPIRED_TOKEN_MESSAGE : AUTH_ERROR_MESSAGE);
  }
  return Promise.reject(error.response.data.description);
};
