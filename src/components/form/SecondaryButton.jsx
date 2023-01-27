import React from 'react';

import PropTypes from 'prop-types';

export const SecondaryButton = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};

SecondaryButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
};
