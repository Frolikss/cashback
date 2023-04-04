import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { ToastIds } from '@shared/constants';

export function handleError(error: unknown, defaultMassage: string) {
  const err = error as AxiosError;
  const serverError = err.response?.statusText;
  toast.error(serverError ? serverError : defaultMassage, { toastId: ToastIds.LOGIN });
}
