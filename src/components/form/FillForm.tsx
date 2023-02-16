import { Field } from '@constants';
import React, { FC, forwardRef } from 'react';
import { FieldError, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
  fields: Field[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export const FillForm: FC<Props> = forwardRef(({ fields, register, errors }, ref) => {
  return (
    <>
      {fields.map(({ component: Component, ...field }, index) => {
        const error = (errors as Record<string, FieldError>)[field.name]?.message;
        return (
          <React.Fragment key={index}>
            <Component field={field} register={register} ref={ref} variant={field.variant} />
            {errors[field.name] && (
              <p className="text-right text-red-regular font-medium">{error}</p>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
});

FillForm.displayName = 'CreateFields';
