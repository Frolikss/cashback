import { cashbackApiClient } from '@config';

class CashbackUsersApi {
  constructor(url) {
    this.url = url;
  }

  getUsers(payload, config) {
    return cashbackApiClient.get(this.url, payload, config);
  }

  getCurrentUser(payload, config) {
    return cashbackApiClient.get(this.url, payload, config);
  }
}

export const usersApi = new CashbackUsersApi('/users');
export const userSelfApi = new CashbackUsersApi('/users/self');
