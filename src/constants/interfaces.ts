import { InputProps } from '@form';
import { FC } from 'react';

export interface Field {
  name: string;
  component: FC<InputProps>;
  type: string;
  placeholder: string;
  variant: string;
  validation: {
    required: boolean;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}

export type FieldData = Omit<Field, 'component'>;

