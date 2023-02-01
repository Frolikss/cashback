import React from 'react';

import PropTypes from 'prop-types';

export const Input = ({ field, register, variant }) => {
  return <input {...field} {...register(field.name, field.validation)} className={variant} />;
};

Input.propTypes = {
  field: PropTypes.object,
  variant: PropTypes.string,
  register: PropTypes.func
};
