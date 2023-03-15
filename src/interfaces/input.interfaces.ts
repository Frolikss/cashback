import { FC, ReactNode } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { FieldNames } from '@constants';

export interface Field {
  name: FieldNames;
  type: string;
  placeholder?: string;
  value?: string;
  options: RegisterOptions;
  component: FC<any>;
  withLabel?: boolean;
  id?: string;
}

export interface LabelContent {
  component: ReactNode;
}
