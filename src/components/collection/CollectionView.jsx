import PropTypes from 'prop-types';
import React from 'react';
import { CollectionViewCell } from '@components';

export const CollectionView = ({ contents }) => {
  return (
    <div className="container content-start gap-4 flex flex-wrap justify-between items-start flex-1 mx-auto">
      {contents.map((contentItem) => {
        return <CollectionViewCell key={contentItem.id} {...contentItem} />;
      })}
    </div>
  );
};

CollectionView.propTypes = {
  contents: PropTypes.array
};
