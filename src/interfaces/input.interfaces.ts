import { FC, ReactNode } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { FieldNames, InputVariants } from '@constants';
import { InputProps } from '@components';

export interface Field {
  name: FieldNames;
  component: FC<InputProps>;
  variant: InputVariants;
  type: string;
  options: RegisterOptions;
  placeholder?: string;
  value?: string;
  id?: string;
  withLabel?: boolean;
}

export interface LabelContent {
  component: ReactNode;
}

export type FieldData = Omit<Field, 'component'>;
