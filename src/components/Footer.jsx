import React from 'react';

import { ListPagination, Select } from '@components';
import { SHOW_MAX_CELLS } from '@constants';
import { ReactComponent as CollectionViewIcon } from '@svg/collectionView.svg';
import { ReactComponent as TableViewIcon } from '@svg/tableView.svg';
import PropTypes from 'prop-types';

import { Button } from './form';

export const Footer = ({ viewType, setView }) => {
  const changeViewOnClick = () => {
    setView((prev) => !prev);
  };

  return (
    <div className="container flex justify-between mx-auto bg-base-100 rounded-lg px-6 py-4">
      <div className="flex gap-2.5">
        <Select options={SHOW_MAX_CELLS} />
        <Button onClick={changeViewOnClick} variant="bg-accent-primary rounded-lg p-3">
          {viewType ? (
            <CollectionViewIcon className="pointer-events-none w-6 h-6" />
          ) : (
            <TableViewIcon className="pointer-events-none w-6 h-6" />
          )}
        </Button>
      </div>
      <div className="flex">
        <ListPagination style="flex gap-4 items-center [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:w-2.5 [&>*]:h-2.5 [&>*]:cursor-pointer [&>*]:p-5" />
        <Button variant="bg-accent-primary px-6 py-2 text-base-100 rounded-lg text-xl font-medium">
          <>Show All</>
        </Button>
      </div>
    </div>
  );
};

Footer.propTypes = {
  viewType: PropTypes.bool,
  setView: PropTypes.func
};
