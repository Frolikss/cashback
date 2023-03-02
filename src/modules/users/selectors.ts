import { RootState } from '@store';

export const selectUsersState = (state: RootState) => {
  if (state.users.users) {
    return state.users.users.map(({ status: _, loginToken: __, ...user }) => user);
  }
};

export const selectAuthState = (state: RootState) => state.users.isAuthorized;
export const selectUserLoading = (state: RootState) => state.users.isLoading;
