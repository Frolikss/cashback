import React from 'react';

import PropTypes from 'prop-types';

export const PrimaryButton = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};

PrimaryButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};
