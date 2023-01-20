import axios from 'axios';

import { requestInterceptor, responseInterceptor } from './interceptors';

export const cashbackApiClient = axios.create({ withCredentials: true });

requestInterceptor(cashbackApiClient);
responseInterceptor(cashbackApiClient);
