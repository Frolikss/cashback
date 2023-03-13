import { ROUTES, Roles } from '@constants';
import { AuthTypeContent, LabelContent } from '@interfaces';
import { Avatar, Button, RoleItem } from '@components';
import { ReactComponent as AdminIcon } from '@svg/adminUsers.svg';
import { ReactComponent as ArrowIcon } from '@svg/arrow.svg';
import { ReactComponent as BlacklistIcon } from '@svg/blacklistIcon.svg';
import { ReactComponent as EditIcon } from '@svg/edit.svg';
import { ReactComponent as ReportIcon } from '@svg/reportIcon.svg';
import { ReactComponent as ShopsIcon } from '@svg/shopsIcon.svg';
import { ReactComponent as TransactionIcon } from '@svg/transactionIcon.svg';
import { ReactComponent as UsersIcon } from '@svg/usersIcon.svg';
import { ReactComponent as WithdrawalIcon } from '@svg/withdrawalIcon.svg';

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

export const getColumns = (handleSortButtonClick: (field: string) => void) => [
  {
    title: (
      <Button onClick={() => handleSortButtonClick('name')}>
        Name <ArrowIcon />
      </Button>
    ),
    dataIndex: 'name',
    render: () => <Avatar />
  },
  {
    title: (
      <Button onClick={() => handleSortButtonClick('role')}>
        Status <ArrowIcon />
      </Button>
    ),
    dataIndex: 'role'
  },
  {
    title: (
      <Button onClick={() => handleSortButtonClick('id')}>
        ID <ArrowIcon />
      </Button>
    ),
    dataIndex: 'id'
  },
  {
    title: (
      <Button onClick={() => handleSortButtonClick('phone')}>
        Phone <ArrowIcon />
      </Button>
    ),
    dataIndex: 'phone'
  },
  {
    title: (
      <Button onClick={() => handleSortButtonClick('email')}>
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

export const AUTH_PAGE_CONTENT: { [key: string]: AuthTypeContent } = {
  LOGIN: {
    header: 'Login',
    subheader: 'Login to your account'
  },
  REGISTER: {
    header: 'Register',
    subheader: 'Register new account'
  },
  ROLES: {
    header: 'Roles',
    subheader: 'Choose your role'
  }
};

export const ROLES_LABEL_CONTENT: { [key in Roles]: LabelContent } = {
  [Roles.ADMIN]: {
    component: <RoleItem role="Admin" />
  },
  [Roles.USER]: {
    component: <RoleItem role="User" />
  }
};
