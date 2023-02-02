import React from 'react';

import avatar from '@png/avatarBig.png';
import { ReactComponent as MoreIcon } from '@svg/itemMore.svg';
import PropTypes from 'prop-types';

export const CollectionViewCell = ({ id, role }) => {
  return (
    <div className="flex basis-1/4 flex-1 gap-4 items-center py-2 px-3 bg-base-100 rounded-lg">
      <img src={avatar} alt="avatar" className="basis-1/4 max-w-[5rem]" />
      <div>
        <p className="font-bold">Avery Ross</p>
        <p className="text-base-700 text-base">
          {role} #{id}
        </p>
      </div>
      <MoreIcon className="self-start" />
    </div>
  );
};

CollectionViewCell.propTypes = {
  id: PropTypes.string,
  role: PropTypes.string
};
