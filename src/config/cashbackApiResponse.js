import { LOGIN_TOKEN_NAME } from '@constants';

export const cashbackApiResponse = (response) => {
  if (response.status === 401) {
    return Promise.reject('Not authorized');
  }

  if (response.data?.loginToken) {
    localStorage.setItem(LOGIN_TOKEN_NAME, response.data?.loginToken);
  }

  return response;
};
