import { TOAST_ID } from '@constants';
import { toast } from 'react-toastify';

export function handleError(error, defaultMassage) {
  const serverError = error.response?.statusText;
  toast.error(serverError ? serverError : defaultMassage, { toastId: TOAST_ID.login });
}
