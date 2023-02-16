import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

export const FillForm = forwardRef(({ fields, register, errors }, ref) => {
  return (
    <>
      {fields.map(({ component: Component, ...field }, index) => (
        <React.Fragment key={index}>
          <Component field={field} register={register} ref={ref} variant={field.variant} />
          {errors[field.name] && (
            <p className="text-right text-red-regular font-medium">{errors[field.name].message}</p>
          )}
        </React.Fragment>
      ))}
    </>
  );
});

FillForm.displayName = 'CreateFields';

FillForm.propTypes = {
  fields: PropTypes.array,
  register: PropTypes.func,
  errors: PropTypes.object
};
