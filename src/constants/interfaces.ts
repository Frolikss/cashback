import { FC } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { InputVariants } from '@constants';
import { InputProps } from '@form';

export interface MenuVariant {
  list: string;
  container: string;
  icon: string;
}

export interface Field {
  name: string;
  component: FC<InputProps>;
  placeholder: string;
  variant: InputVariants;
  type: string;
  options: RegisterOptions;
}

export interface CollectionViewVariant {
  image?: string;
  contents: string[];
}

export type FieldData = Omit<Field, 'component'>;
