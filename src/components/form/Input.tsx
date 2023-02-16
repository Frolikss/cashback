import { FieldData } from '@constants';
import React, { FC, ForwardedRef } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface InputProps {
  field: FieldData;
  register: UseFormRegister<FieldValues>;
  variant: string;
  ref: ForwardedRef<unknown>;
}

export const Input: FC<InputProps> = ({ field, register, variant }) => {
  return <input {...register(field.name, field.validation)} {...field} className={variant} />;
};
