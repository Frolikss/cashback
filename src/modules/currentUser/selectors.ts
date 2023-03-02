import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store';

const selectCurrentUserState = (state: RootState) => state.currentUser;

export const selectAuthorizationStatus = createSelector(
  selectCurrentUserState,
  (state) => state.isAuthorized
);
export const selectCurrentUser = createSelector(
  selectCurrentUserState,
  (state) => state.currentUser
);
