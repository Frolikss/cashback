import { FC } from 'react';
import { FieldError, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Field } from '@interfaces';

interface Props {
  fields: Field[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export const FillForm: FC<Props> = ({ fields, register, errors }) => {
  return (
    <>
      {fields.map(({ component: Component, label: Label, name, options, ...field }) => {
        const error = (errors as Record<string, FieldError>)[name]?.message;
        return (
          <div key={name}>
            <Component {...field} {...register(name, options)} />

            {errors[name] && <p className="text-right text-red-regular font-medium">{error}</p>}
            {Label}
          </div>
        );
      })}
    </>
  );
};
