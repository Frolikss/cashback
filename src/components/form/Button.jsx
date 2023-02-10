import React from 'react';

import PropTypes from 'prop-types';

export const Button = ({ variant, modalRef, children, ...props }) => {
  return (
    <button className={variant} ref={modalRef} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  variant: PropTypes.string,
  modalRef: PropTypes.object
};
