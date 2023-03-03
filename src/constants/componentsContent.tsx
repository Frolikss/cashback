import { ColumnGroupType, ColumnType } from 'rc-table/es/interface';
import { ButtonVariants, ROUTES } from '@constants';
import { TableHeader, User } from '@interfaces';
import { Button } from '@components';
import { ReactComponent as AdminIcon } from '@svg/adminUsers.svg';
import { ReactComponent as ArrowIcon } from '@svg/arrow.svg';
import { ReactComponent as BlacklistIcon } from '@svg/blacklistIcon.svg';
import { ReactComponent as EditIcon } from '@svg/edit.svg';
import { ReactComponent as ReportIcon } from '@svg/reportIcon.svg';
import { ReactComponent as ShopsIcon } from '@svg/shopsIcon.svg';
import { ReactComponent as TransactionIcon } from '@svg/transactionIcon.svg';
import { ReactComponent as UsersIcon } from '@svg/usersIcon.svg';
import { ReactComponent as WithdrawalIcon } from '@svg/withdrawalIcon.svg';
import avatarSmall from '@png/avatarSmall.png';

export const MAX_LIST_PAGE_ITEMS = [
  { id: 0, value: '10' },
  { id: 1, value: '20' },
  { id: 2, value: '50' }
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

export const getColumns = (onClick: (field: string) => void) => [
  {
    title: (
      <Button onClick={() => onClick('name')}>
        Name <ArrowIcon />
      </Button>
    ),
    dataIndex: 'name',
    render: () => (
      <div className="flex items-center gap-6 font-bold">
        <img src={avatarSmall} alt="avatar" className="w-10 h-10" />
        Avery Ross
      </div>
    )
  },
  {
    title: (
      <Button onClick={() => onClick('role')}>
        Status <ArrowIcon />
      </Button>
    ),
    dataIndex: 'role'
  },
  {
    title: (
      <Button onClick={() => onClick('id')}>
        ID <ArrowIcon />
      </Button>
    ),
    dataIndex: 'id'
  },
  {
    title: (
      <Button onClick={() => onClick('phone')}>
        Phone <ArrowIcon />
      </Button>
    ),
    dataIndex: 'phone'
  },
  {
    title: (
      <Button onClick={() => onClick('email')}>
        E-mail <ArrowIcon />
      </Button>
    ),
    dataIndex: 'email'
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    render: () => (
      <Button>
        <EditIcon />
      </Button>
    )
  }
];

export const TABLE_HEADERS: TableHeader[] = [
  {
    isSortable: true,
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
    isSortable: true,
    header: 'Status',
    field: 'role'
  },
  {
    isSortable: true,
    header: 'ID',
    field: 'id'
  },
  {
    isSortable: true,
    header: 'Phone',
    field: 'phone'
  },
  {
    isSortable: true,
    header: 'E-mail',
    field: 'email'
  },
  {
    isSortable: false,
    header: 'Actions',
    field: 'actions',
    component: () => (
      <Button variant={ButtonVariants.UTILITY}>
        <EditIcon />
      </Button>
    )
  }
];
