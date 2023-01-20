const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const ENDPOINTS = {
  login: '/login'
};
const INVALID_EMAIL = 'Invalid email address';
const MIN_PASS_LENGTH = 'Minimal password length is 6';
const TOAST_ID = {
  login: 'login'
};
const LOGIN_TOKEN_NAME = 'token';
const LOGIN_ERROR_MESSAGE = 'Something went wrong. Please, try again';
export {
  EMAIL_PATTERN,
  ENDPOINTS,
  INVALID_EMAIL,
  MIN_PASS_LENGTH,
  TOAST_ID,
  LOGIN_TOKEN_NAME,
  LOGIN_ERROR_MESSAGE
};
