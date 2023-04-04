import { AxiosRequestConfig } from 'axios';
import { FieldValues } from 'react-hook-form';

import { cashbackApiClient } from '@shared/config';

class CashbackAuthApi {
  constructor(private readonly url: string) {
    this.url = url;
  }

  signIn(payload: FieldValues, config?: AxiosRequestConfig) {
    return cashbackApiClient.post(this.url, payload, config);
  }
}

export const authApi = new CashbackAuthApi('/login');
