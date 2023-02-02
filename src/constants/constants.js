import { ReactComponent as AdminIcon } from '@svg/adminUsers.svg';
import { ReactComponent as BlacklistIcon } from '@svg/blacklistIcon.svg';
import { ReactComponent as ReportIcon } from '@svg/reportIcon.svg';
import { ReactComponent as ShopsIcon } from '@svg/shopsIcon.svg';
import { ReactComponent as TransactionIcon } from '@svg/transactionIcon.svg';
import { ReactComponent as UsersIcon } from '@svg/usersIcon.svg';
import { ReactComponent as WithdrawalIcon } from '@svg/withdrawalIcon.svg';

const OVERLAY_STYLE = 'block fixed w-screen h-screen bg-base-1000 opacity-50 top-0 right-0';
const ROUTES = {
  LOGIN: '/login',
  HOME: '/'
};
const AUTH_TOKEN = 'token';
const MENU_CONTENT = [
  {
    route: ROUTES.HOME,
    icon: AdminIcon,
    name: 'Admin Users'
  },
  {
    route: ROUTES.LOGIN,
    icon: UsersIcon,
    name: 'Users'
  },
  {
    route: ROUTES.LOGIN,
    icon: ShopsIcon,
    name: 'Shops'
  },
  {
    route: ROUTES.LOGIN,
    icon: TransactionIcon,
    name: 'Transactions'
  },
  {
    route: ROUTES.LOGIN,
    icon: WithdrawalIcon,
    name: 'Withdraw'
  },
  {
    route: ROUTES.LOGIN,
    icon: BlacklistIcon,
    name: 'Blacklisted'
  },
  {
    route: ROUTES.LOGIN,
    icon: ReportIcon,
    name: 'Reports'
  }
];
const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const INVALID_EMAIL = 'Invalid email address';
const MIN_PASS_LENGTH = 'Minimal password length is 6';
const TOAST_ID = {
  login: 'login'
};
const LOGIN_ERROR_MESSAGE = 'Something went wrong. Please, try again';
const EXPIRED_TOKEN_MESSAGE = 'Session expired, please log in again';
const AUTH_ERROR_MESSAGE = 'Please log in first';
const TABLE_HEADINGS = ['Name', 'Status', 'ID', 'Phone', 'E-mail'];

export {
  TABLE_HEADINGS,
  OVERLAY_STYLE,
  AUTH_TOKEN,
  MENU_CONTENT,
  AUTH_ERROR_MESSAGE,
  EXPIRED_TOKEN_MESSAGE,
  ROUTES,
  EMAIL_PATTERN,
  INVALID_EMAIL,
  MIN_PASS_LENGTH,
  TOAST_ID,
  LOGIN_ERROR_MESSAGE
};
