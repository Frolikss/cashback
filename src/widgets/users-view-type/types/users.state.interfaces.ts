import { User } from '@shared/types';

export interface UsersState {
  isLoading: boolean;
  isAuthorized: boolean;
  list: User[] | null;
}
