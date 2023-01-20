import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

export const CreateFields = forwardRef(({ fields, register }, ref) => {
  return (
    <>
      {fields.map(({ component: Component, ...field }) => (
        <Component key={field.name} field={field} register={register} ref={ref} />
      ))}
    </>
  );
});

CreateFields.displayName = 'CreateFields';

CreateFields.propTypes = {
  fields: PropTypes.array,
  register: PropTypes.func
};
