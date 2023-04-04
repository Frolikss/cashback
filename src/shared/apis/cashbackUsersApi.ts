import { AxiosRequestConfig } from 'axios';
import { cashbackApiClient } from '@shared/config';
import { DefaultQueryParams } from '@widgets/users-view-type/types/default-query-params';

class CashbackUsersApi {
  constructor(private readonly url: string) {
    this.url = url;
  }

  getUsers({ page = 1, per_page = 10, ...rest }: DefaultQueryParams, config?: AxiosRequestConfig) {
    return cashbackApiClient.get(`${this.url}/?${{ page, per_page, ...rest }}`, config);
  }

  getCurrentUser(config?: AxiosRequestConfig) {
    return cashbackApiClient.get(`${this.url}/self`, config);
  }
}

export const usersApi = new CashbackUsersApi('/users');
