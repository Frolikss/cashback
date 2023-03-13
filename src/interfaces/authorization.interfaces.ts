import { ReactNode } from 'react';
import { RegisterUser } from '@interfaces';

export interface AuthState {
  isLoading: boolean;
  registerUser: RegisterUser | null;
}

export interface AuthTypeContent {
  header: string;
  subheader: string;
  buttonComponents?: ReactNode;
}
