import React from 'react';
import { Button } from '@shared/components';
import { ButtonVariants } from '@shared/constants';
import { FormButton } from '@shared/types';
import { AuthTypeContent } from '@interfaces';
import { Avatar } from '@components';
import { ReactComponent as ArrowIcon } from '@svg/arrow.svg';
import { ReactComponent as EditIcon } from '@svg/edit.svg';

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
  },
  INVITE: {
    header: 'Invite',
    subheader:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores dolorum esse facilis hic laborum nostrum qui tempora unde voluptatibus?'
  }
};

export const INVITE_PAGE_BUTTONS: FormButton[] = [
  {
    id: 1,
    type: 'button',
    variant: ButtonVariants.SECONDARY,
    children: 'Back'
  },
  {
    id: 2,
    type: 'button',
    variant: ButtonVariants.SECONDARY,
    children: 'Skip'
  },
  {
    id: 3,
    variant: ButtonVariants.PRIMARY,
    children: 'Submit'
  }
];
