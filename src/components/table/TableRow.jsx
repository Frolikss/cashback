import React from 'react';

import avatar from '@png/avatarSmall.png';
import { ReactComponent as CloseIcon } from '@svg/close.svg';
import { ReactComponent as EditIcon } from '@svg/edit.svg';
import PropTypes from 'prop-types';

export const TableRow = ({ id, role, phone, email }) => {
  return (
    <tr className="[&>*]:py-6 border-b border-base-400">
      <td className="flex items-center gap-6 font-bold">
        <img src={avatar} alt="avatar" className="w-10 h-10" />
        Avery Ross
      </td>
      <td>{role}</td>
      <td>#{id}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="text-right">
        <button>
          <EditIcon />
        </button>
        <button>
          <CloseIcon />
        </button>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  id: PropTypes.string,
  role: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string
};
