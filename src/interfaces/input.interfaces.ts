import { FC, ReactNode } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { FieldNames, Roles } from '@constants';

export interface Field {
  name: FieldNames;
  type: string;
  placeholder?: string;
  value?: string;
  options: RegisterOptions;
  component: FC<any>;
  withLabel?: boolean;
  id?: Roles;
}

export interface LabelContent {
  component: ReactNode;
}

export type FieldData = Omit<Field, 'component'>;
export type RadioData = Omit<FieldData, 'type'>;
