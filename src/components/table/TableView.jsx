import React from 'react';

import { TableRow } from '@components';
import { TABLE_COLS_HEADINGS } from '@constants';
import { Button } from '@form';
import avatar from '@png/avatarSmall.png';
import { ReactComponent as ArrowIcon } from '@svg/arrow.svg';
import { ReactComponent as CloseIcon } from '@svg/close.svg';
import { ReactComponent as EditIcon } from '@svg/edit.svg';
import PropTypes from 'prop-types';

export const TableView = ({ users }) => {
  console.log(users);
  return (
    <div className="container flex-1 mx-auto bg-base-100 rounded-lg p-6">
      <table className="w-full">
        <thead>
          <tr className="[&>*]:text-right [&>*]:pb-6 border-b border-base-300">
            {TABLE_COLS_HEADINGS.map((heading) => {
              return (
                <th key={heading}>
                  <Button variant="flex items-center gap-1 font-normal text-base-600">
                    <>
                      {heading}
                      <ArrowIcon />
                    </>
                  </Button>
                </th>
              );
            })}
            <th className="font-normal text-lg text-base-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow
              image={
                <div className="flex items-center gap-6 font-bold">
                  <img src={avatar} alt="avatar" className="w-10 h-10" />
                  Avery Ross
                </div>
              }
              key={user.id}
              id={user.id}
              role={user.role}
              email={user.email}
              phone={user.phone}
              buttons={
                <div className="text-right">
                  <Button>
                    <EditIcon />
                  </Button>
                  <Button>
                    <CloseIcon />
                  </Button>
                </div>
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableView.propTypes = {
  users: PropTypes.array
};
