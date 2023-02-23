import PropTypes from 'prop-types';
import React from 'react';
import { MODAL_VARIANTS } from '@constants';

export const ModalWrapper = ({ children, isOpened, variant }) => {
  const clickOutsideDiv = (event) => event.stopPropagation();

  if (!isOpened) return null;
  return (
    <div onClick={clickOutsideDiv} className={MODAL_VARIANTS[variant]}>
      {children}
    </div>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.element,
  isOpened: PropTypes.bool,
  variant: PropTypes.string
};
