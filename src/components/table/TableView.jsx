import React from 'react';

import { TABLE_HEADINGS } from '@constants';
import { ReactComponent as ArrowIcon } from '@svg/arrow.svg';
import PropTypes from 'prop-types';

import { TableRow } from './TableRow';

export const TableView = ({ users }) => {
  return (
    <div className="container flex-1 mx-auto bg-base-100 rounded-lg p-6">
      <table className="w-full">
        <thead>
          <tr className="[&>*]:text-right [&>*]:pb-6 border-b border-base-300">
            {TABLE_HEADINGS.map((heading) => {
              return (
                <th key={heading}>
                  <button className="flex items-center gap-1 font-normal text-base-600">
                    {heading}
                    <ArrowIcon />
                  </button>
                </th>
              );
            })}
            <th className="font-normal text-lg text-base-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id} {...user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableView.propTypes = {
  users: PropTypes.array
};
