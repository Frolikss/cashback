import React from 'react';

import { ReactComponent as ArrowIcon } from '@svg/paginationArrow.svg';
import PropTypes from 'prop-types';
import Pagination from 'rc-pagination';

export const ListPagination = ({ style }) => {
  const paginationRender = (current, type, element) => {
    if (type === 'prev' && current !== 0) {
      return (
        <button type="button">
          <ArrowIcon className="rotate-180" />
        </button>
      );
    }
    if (type === 'next') {
      return (
        <button type="button">
          <ArrowIcon />
        </button>
      );
    }
    if (type === 'jump-next' || type === 'jump-prev') {
      return <span>...</span>;
    }
    return element;
  };

  return (
    <Pagination
      showLessItems={true}
      pageSize={10}
      className={style}
      default
      total={100}
      itemRender={paginationRender}
    />
  );
};

ListPagination.propTypes = {
  style: PropTypes.string
};
