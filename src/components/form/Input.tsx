import { FC, ForwardedRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { INPUT_STYLES, InputVariants } from '@constants';
import { Field, FieldData } from '@interfaces';

export interface InputProps {
  field: FieldData;
  register: UseFormRegister<Field>;
  variant: InputVariants;
  ref: ForwardedRef<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({ field, register, variant = InputVariants.PRIMARY }) => {
  return (
    <input {...register(field.name, field.options)} {...field} className={INPUT_STYLES[variant]} />
  );
};
