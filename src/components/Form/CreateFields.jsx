import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';

export const CreateFields = forwardRef(({ fields, register, errors }, ref) => {
  return (
    <>
      {fields.map(({ component: Component, ...field }, index) => (
        <React.Fragment key={index}>
          <Component key={field.name} field={field} register={register} ref={ref} />
          {errors[field.name] && (
            <p key={Date.now()} className="text-right text-red-regular font-medium">
              {errors[field.name].message}
            </p>
          )}
        </React.Fragment>
      ))}
    </>
  );
});

CreateFields.displayName = 'CreateFields';

CreateFields.propTypes = {
  fields: PropTypes.array,
  register: PropTypes.func,
  errors: PropTypes.object
};
