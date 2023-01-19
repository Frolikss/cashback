import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ field, register }) => {
  return <input {...register(field.name, field.validation)} {...field} />;
};

Input.propTypes = {
  field: PropTypes.object,
  register: PropTypes.func
};
