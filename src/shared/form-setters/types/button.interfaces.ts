import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { ButtonVariants } from '@shared/button';

export interface FormButton {
  id: number;
  type?: 'submit' | 'reset' | 'button';
  variant: ButtonVariants;
  children: ReactNode;
}

export interface FormButtonAction {
  id: number;
  customStyle?: string;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  action?: MouseEventHandler<HTMLButtonElement>;
}
