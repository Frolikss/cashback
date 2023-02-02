import React from 'react';

import { CollectionViewCell } from '@components';
import PropTypes from 'prop-types';

export const CollectionView = ({ users }) => {
  return (
    <div className="container content-start gap-4 flex flex-wrap justify-between items-start flex-1 mx-auto">
      {users.map((user) => {
        return <CollectionViewCell key={user.id} {...user} />;
      })}
    </div>
  );
};

CollectionView.propTypes = {
  users: PropTypes.array
};
