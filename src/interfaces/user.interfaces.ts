export interface User {
  //TODO: DELETE [key: string]
  [key: string]: string;
  email: string;
  id: string;
  phone: string;
  role: string;
}

export interface UsersState {
  isLoading: boolean;
  isAuthorized: boolean;
  list: User[] | null;
}

export interface CurrentUserState {
  isLoading: boolean;
  isAuthorized: boolean;
  currentUser: User | null;
}
