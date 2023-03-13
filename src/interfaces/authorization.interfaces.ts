import { ReactNode } from 'react';
import { RegisteredUser } from '@interfaces';

export interface AuthState {
  isLoading: boolean;
  registerUser: RegisteredUser | null;
}

export interface AuthTypeContent {
  header: string;
  subheader: string;
  buttonComponents?: ReactNode;
}
