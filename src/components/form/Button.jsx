import PropTypes from 'prop-types';
import React from 'react';

export const Button = ({ variant, modalRef, children, ...props }) => {
  return (
    <button className={variant} ref={modalRef} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  modalRef: PropTypes.object
};
