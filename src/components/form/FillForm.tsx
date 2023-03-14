import { FC } from 'react';
import { FieldError, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { LabelVariants, ROLES_LABEL_CONTENT } from '@constants';
import { Field } from '@interfaces';
import { Label } from '@components';

interface Props {
  fields: Field[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  labelVariant?: LabelVariants;
}

export const FillForm: FC<Props> = ({ fields, register, errors, labelVariant }) => {
  return (
    <>
      {fields.map(({ component: Component, withLabel, name, options, ...field }, index) => {
        const error = (errors as Record<string, FieldError>)[name]?.message;
        return (
          <div key={index}>
            <Component {...field} {...register(name, options)} />

            {errors[name] && <p className="text-right text-red-regular font-medium">{error}</p>}

            {withLabel && field.id && (
              <Label id={field.id} variant={labelVariant ?? LabelVariants.ROLES}>
                {ROLES_LABEL_CONTENT[field.id].component}
              </Label>
            )}
          </div>
        );
      })}
    </>
  );
};
