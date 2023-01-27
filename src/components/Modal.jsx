import React from 'react';

import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export const Modal = ({ children, isOpened }) => {
  if (!isOpened) return null;

  return ReactDOM.createPortal(
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute top-116 right-0 bg-base-100 rounded-lg shadow-2xl flex flex-col items-center p-6 gap-4 w-1/4">
      {children}
    </div>,
    document.getElementById('modal')
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  isOpened: PropTypes.bool
};
