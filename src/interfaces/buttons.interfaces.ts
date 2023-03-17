import { ReactNode } from 'react';
import { ButtonVariants } from '@constants';

export interface FormButton {
  id: number;
  type?: 'submit' | 'reset' | 'button';
  variant: ButtonVariants;
  children: ReactNode;
}

export interface FormButtonAction {
  id: number;
  customStyle?: string;
  action?: (event?: MouseEvent) => void;
}
