import PropTypes from 'prop-types';
import React from 'react';

export const ModalWrapper = ({ children, isOpened, variant }) => {
  const clickOutsideDiv = (event) => event.stopPropagation();

  if (!isOpened) return null;
  return (
    <div onClick={clickOutsideDiv} className={variant}>
      {children}
    </div>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.element,
  isOpened: PropTypes.bool,
  variant: PropTypes.string
};
