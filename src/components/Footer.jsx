import React from 'react';

import { ListPagination, Select } from '@components';
import { ReactComponent as CollectionViewIcon } from '@svg/collectionView.svg';
import { ReactComponent as TableViewIcon } from '@svg/tableView.svg';
import PropTypes from 'prop-types';

export const Footer = ({ viewType, setView }) => {
  const changeViewOnClick = () => {
    setView((prev) => !prev);
  };
  return (
    <div className="container flex justify-between mx-auto bg-base-100 rounded-lg px-6 py-4">
      <div className="flex gap-2.5">
        <Select options={[10, 20, 50]} />
        <button onClick={changeViewOnClick} className="bg-accent-primary rounded-lg p-3">
          {viewType ? (
            <CollectionViewIcon className="pointer-events-none w-6 h-6" />
          ) : (
            <TableViewIcon className="pointer-events-none w-6 h-6" />
          )}
        </button>
      </div>
      <div className="flex">
        <ListPagination style="flex gap-4 items-center [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:w-2.5 [&>*]:h-2.5 [&>*]:cursor-pointer [&>*]:p-5" />
        <button className="bg-accent-primary px-6 py-2 text-base-100 rounded-lg text-xl font-medium">
          Show All
        </button>
      </div>
    </div>
  );
};

Footer.propTypes = {
  viewType: PropTypes.bool,
  setView: PropTypes.func
};
