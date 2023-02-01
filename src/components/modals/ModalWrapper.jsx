import React from 'react';

import PropTypes from 'prop-types';

export const ModalWrapper = ({ children, isOpened, variant }) => {
  if (!isOpened) return null;

  const clickOutsideDiv = (event) => event.stopPropagation();

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
