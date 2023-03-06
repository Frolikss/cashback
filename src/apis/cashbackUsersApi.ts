import { AxiosRequestConfig } from 'axios';
import { UsersPayload } from '@interfaces';
import { cashbackApiClient } from '@config';

class CashbackUsersApi {
  constructor(private readonly url: string) {
    this.url = url;
  }

  getUsers(payload: UsersPayload, config?: AxiosRequestConfig) {
    return cashbackApiClient.get(`${this.url}/?${{ ...payload }}`, config);
  }

  getCurrentUser(config?: AxiosRequestConfig) {
    return cashbackApiClient.get(this.url, config);
  }
}

export const usersApi = new CashbackUsersApi('/users');
export const userSelfApi = new CashbackUsersApi('/users/self');
