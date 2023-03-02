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

export interface CellData {
  [key: string]: string | number;
}

export interface TableHeader {
  isSortable: boolean;
  header: string;
  field: string;
  component?: () => JSX.Element;
  defaultValue?: string;
}

export interface AuthState {
  isLoading: boolean;
}

export interface User {
  [key: string]: string;
  email: string;
  id: string;
  phone: string;
  role: string;
  status: string;
  loginToken: string;
}

export interface UsersState {
  isLoading: boolean;
  isAuthorized: boolean;
  users: User[] | null;
}

export interface CurrentUserState {
  isLoading: boolean;
  isAuthorized: boolean;
  currentUser: User | null;
}

export type FieldData = Omit<Field, 'component'>;
