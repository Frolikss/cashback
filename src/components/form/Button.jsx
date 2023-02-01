import React from 'react';

import PropTypes from 'prop-types';

export const Button = ({ variant, text, content, modalRef, ...props }) => {
  return (
    <button className={variant} ref={modalRef} {...props}>
      {content}
      {text}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  content: PropTypes.element,
  modalRef: PropTypes.object
};
