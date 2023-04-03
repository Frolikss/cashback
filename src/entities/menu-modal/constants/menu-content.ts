import { AppRoutes } from '@shared/constants';
import { ReactComponent as AdminIcon } from '@svg/adminUsers.svg';
import { ReactComponent as BlacklistIcon } from '@svg/blacklistIcon.svg';
import { ReactComponent as ReportIcon } from '@svg/reportIcon.svg';
import { ReactComponent as ShopsIcon } from '@svg/shopsIcon.svg';
import { ReactComponent as TransactionIcon } from '@svg/transactionIcon.svg';
import { ReactComponent as UsersIcon } from '@svg/usersIcon.svg';
import { ReactComponent as WithdrawalIcon } from '@svg/withdrawalIcon.svg';

export const MODAL_MENU_CONTENT = [
  {
    route: AppRoutes.HOME,
    icon: AdminIcon,
    name: 'Admin Users'
  },
  {
    route: AppRoutes.LOGIN,
    icon: UsersIcon,
    name: 'Users'
  },
  {
    route: AppRoutes.LOGIN,
    icon: ShopsIcon,
    name: 'Shops'
  },
  {
    route: AppRoutes.LOGIN,
    icon: TransactionIcon,
    name: 'Transactions'
  },
  {
    route: AppRoutes.LOGIN,
    icon: WithdrawalIcon,
    name: 'Withdraw'
  },
  {
    route: AppRoutes.LOGIN,
    icon: BlacklistIcon,
    name: 'Blacklisted'
  },
  {
    route: AppRoutes.LOGIN,
    icon: ReportIcon,
    name: 'Reports'
  }
];
