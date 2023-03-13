import { FC, ForwardedRef, forwardRef } from 'react';
import { FieldError, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { LabelVariants, ROLES_LABEL_CONTENT } from '@constants';
import { Field } from '@interfaces';
import { Label } from './Label';

interface Props {
  fields: Field[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  labelVariant?: LabelVariants;
}

export const FillForm: FC<Props> = forwardRef(
  ({ fields, register, errors, labelVariant }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        {fields.map(({ component: Component, withLabel, ...field }, index) => {
          const error = (errors as Record<string, FieldError>)[field.name]?.message;
          return (
            <div key={index}>
              <Component field={field} register={register} ref={ref} variant={field.variant} />

              {errors[field.name] && (
                <p className="text-right text-red-regular font-medium">{error}</p>
              )}

              {withLabel && field.id && (
                <Label id={field.id} variant={labelVariant ?? LabelVariants.ROLES}>
                  {ROLES_LABEL_CONTENT[field.id.toUpperCase()].component}
                </Label>
              )}
            </div>
          );
        })}
      </>
    );
  }
);

FillForm.displayName = 'CreateFields';
