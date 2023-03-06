import { FC } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { InputVariants } from '@constants';
import { InputProps } from '@components';

export interface Field {
  name: string;
  component: FC<InputProps>;
  placeholder: string;
  variant: InputVariants;
  type: string;
  options: RegisterOptions;
}

export type FieldData = Omit<Field, 'component'>;
