import { RootState } from '@store';

export const selectAuthState = (state: RootState) => state.currentUser.isAuthorized;
export const selectCurrentUser = (state: RootState) => state.currentUser.currentUser;
