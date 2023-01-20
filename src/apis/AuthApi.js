import { cashbackApiClient } from '@config';
import { ENDPOINTS } from '@constants';

class AuthApi {
  constructor(url) {
    this.url = url;
  }

  checkLoginInfo(payload, config) {
    return cashbackApiClient.post(`${this.url}${ENDPOINTS.login}`, payload, config);
  }
}

export const authApi = new AuthApi(process.env.REACT_APP_BASE_URL);
