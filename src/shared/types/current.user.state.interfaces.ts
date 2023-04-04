import { User } from '@shared/types/index';

export interface CurrentUserState {
  isLoading: boolean;
  isAuthorized: boolean;
  currentUser: User | null;
}
