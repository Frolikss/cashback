import { cashbackApiClient } from '@http';
import { ENDPOINTS } from '@constants';

export class AuthApi {
  static sendLoginInfo(email, password) {
    return cashbackApiClient.post(ENDPOINTS.login, { email, password });
  }
}
