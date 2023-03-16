import { ReactNode } from 'react';
import { RegisteredUser } from '@interfaces';

export interface AuthState {
  isLoading: boolean;
  inviteSend: { isSuccessful: boolean; message: string };
  registeredUser: RegisteredUser | null;
}

export interface AuthTypeContent {
  header: string;
  subheader: string;
  buttonComponents?: ReactNode;
}
