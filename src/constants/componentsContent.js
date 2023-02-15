import { ROUTES } from '@constants';
import { ReactComponent as AdminIcon } from '@svg/adminUsers.svg';
import { ReactComponent as BlacklistIcon } from '@svg/blacklistIcon.svg';
import { ReactComponent as ReportIcon } from '@svg/reportIcon.svg';
import { ReactComponent as ShopsIcon } from '@svg/shopsIcon.svg';
import { ReactComponent as TransactionIcon } from '@svg/transactionIcon.svg';
import { ReactComponent as UsersIcon } from '@svg/usersIcon.svg';
import { ReactComponent as WithdrawalIcon } from '@svg/withdrawalIcon.svg';

export const SHOW_MAX_CELLS = [10, 20, 50];
export const MODAL_MENU_CONTENT = [
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
