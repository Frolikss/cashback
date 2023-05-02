import { FC, ReactNode } from 'react';
import { RegisterOptions } from 'react-hook-form';

export interface Field {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  options?: RegisterOptions;
  component: FC<any>;
  label?: ReactNode;
  id?: string;
}
