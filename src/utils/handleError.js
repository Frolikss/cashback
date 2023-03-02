import { toast } from 'react-toastify';
import { TOAST_ID } from '@constants';

export function handleError(error, defaultMassage) {
  const serverError = error.response?.statusText;
  toast.error(serverError ? serverError : defaultMassage, { toastId: TOAST_ID.login });
}
