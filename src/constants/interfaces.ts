import { FC, SVGProps } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { InputVariants } from '@constants';
import { InputProps } from '@form';

export interface MenuVariantStyle {
  listType: string;
  wrapperStyle: string;
  iconStyle: string;
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

export interface TableVariant {
  image?: string;
  headings: string[];
  buttonIcons: FC<SVGProps<SVGSVGElement>>[];
}

export type FieldData = Omit<Field, 'component'>;
