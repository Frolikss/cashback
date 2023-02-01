import { cashbackApiClient } from '@config';

class CashbackApi {
  constructor(url) {
    this.url = url;
  }

  signIn(payload, config) {
    return cashbackApiClient.post(this.url, payload, config);
  }

  getUsers(payload, config) {
    return cashbackApiClient.get(this.url, payload, config);
  }

  getCurrentUser(payload, config) {
    return cashbackApiClient.get(this.url, payload, config);
  }
}

export const authApi = new CashbackApi('/login');
export const usersApi = new CashbackApi('/users');
export const userSelfApi = new CashbackApi('/users/self');
