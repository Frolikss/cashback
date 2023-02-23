import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { MODAL_STYLES } from '@constants';

export const ModalWrapper = ({ children, isOpened, variant }) => {
  const clickOutsideDiv = (event) => event.stopPropagation();

  if (!isOpened) return null;
  return (
    <div
      onClick={clickOutsideDiv}
      className={cn(
        MODAL_STYLES[variant],
        'mt-4 top-full bg-base-100 rounded-lg shadow-2xl flex flex-col p-6 gap-4 w-1/3'
      )}>
      {children}
    </div>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.element,
  isOpened: PropTypes.bool,
  variant: PropTypes.string
};
