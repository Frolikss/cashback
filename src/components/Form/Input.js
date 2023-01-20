import React from 'react';

import PropTypes from 'prop-types';

export const Input = ({ field, register }) => {
  return <input {...field} {...register(field.name, field.validation)} />;
};

Input.propTypes = {
  field: PropTypes.object,
  register: PropTypes.func
};
