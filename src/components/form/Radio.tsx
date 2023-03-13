import cn from 'classnames';
import { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { RADIO_STYLES, RadioVariants } from '@constants';
import { RadioData } from '@interfaces';

export interface RadioProps {
  field: RadioData;
  register: UseFormRegister<FieldValues>;
  variant?: RadioVariants;
}

export const Radio: FC<RadioProps> = ({ field, register, variant = RadioVariants.PRIMARY }) => {
  return (
    <input
      type="radio"
      {...register(field.name, field.options)}
      {...field}
      className={cn(RADIO_STYLES[variant], 'w-full')}
    />
  );
};
