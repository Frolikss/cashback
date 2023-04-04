import { RegisteredUser } from './user.interfaces';

export interface AuthState {
  isLoading: boolean;
  registeredUser: RegisteredUser | null;
}
