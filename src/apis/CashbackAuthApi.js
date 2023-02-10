import { cashbackApiClient } from '@config';

class CashbackAuthApi {
  constructor(url) {
    this.url = url;
  }

  signIn(payload, config) {
    return cashbackApiClient.post(this.url, payload, config);
  }
}

export const authApi = new CashbackAuthApi('/login');
