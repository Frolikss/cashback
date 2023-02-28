import { ButtonVariants, ROUTES, TableCellType, TableHeader } from '@constants';
import { Button } from '@form';
import { ReactComponent as AdminIcon } from '@svg/adminUsers.svg';
import { ReactComponent as BlacklistIcon } from '@svg/blacklistIcon.svg';
import { ReactComponent as EditIcon } from '@svg/edit.svg';
import { ReactComponent as ReportIcon } from '@svg/reportIcon.svg';
import { ReactComponent as ShopsIcon } from '@svg/shopsIcon.svg';
import { ReactComponent as TransactionIcon } from '@svg/transactionIcon.svg';
import { ReactComponent as UsersIcon } from '@svg/usersIcon.svg';
import { ReactComponent as WithdrawalIcon } from '@svg/withdrawalIcon.svg';
import avatarSmall from '@png/avatarSmall.png';

export const MAX_LIST_PAGE_ITEMS = [
  { id: 0, value: 10 },
  { id: 1, value: 20 },
  { id: 2, value: 50 }
];
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

export const TABLE_HEADERS: TableHeader[] = [
  {
    type: TableCellType.TEXT,
    header: 'Name',
    field: 'name',
    component: () => (
      <div className="flex items-center gap-6 font-bold">
        <img src={avatarSmall} alt="avatar" className="w-10 h-10" />
      </div>
    ),
    defaultValue: 'Unspecified'
  },
  {
    type: TableCellType.TEXT,
    header: 'Status',
    field: 'role'
  },
  {
    type: TableCellType.TEXT,
    header: 'ID',
    field: 'id'
  },
  {
    type: TableCellType.TEXT,
    header: 'Phone',
    field: 'phone'
  },
  {
    type: TableCellType.TEXT,
    header: 'E-mail',
    field: 'email'
  },
  {
    type: TableCellType.ACTION,
    header: 'Actions',
    field: 'actions',
    component: () => (
      <Button variant={ButtonVariants.UTILITY}>
        <EditIcon />
      </Button>
    )
  }
];
