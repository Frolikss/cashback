import { Button } from '@shared/components/button';

import { Avatar } from '@entities/avatar';

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
