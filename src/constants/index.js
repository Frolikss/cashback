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
const PRIMARY_BUTTON_STYLE =
  'flex-1 text-base-100 rounded-lg bg-accent-primary font-eUkraine font-medium text-lg p-3 leading-5 hover:bg-accent-dark';
const SECONDARY_BUTTON_STYLE =
  'flex-1 text-accent-primary rounded-lg border-3 border-accent-primary hover:border-accent-dark';
export {
  PRIMARY_BUTTON_STYLE,
  SECONDARY_BUTTON_STYLE,
  EMAIL_PATTERN,
  ENDPOINTS,
  INVALID_EMAIL,
  MIN_PASS_LENGTH,
  TOAST_ID,
  LOGIN_TOKEN_NAME,
  LOGIN_ERROR_MESSAGE
};
