import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store';

const selectAuthState = (state: RootState) => state.auth;

export const selectRegisteredUser = createSelector(
  selectAuthState,
  (state) => state.registeredUser
);

export const selectInviteSendStatus = createSelector(
  selectAuthState,
  (state) => state.inviteSend.isSuccessful
);

export const selectInviteSendMessage = createSelector(
  selectAuthState,
  (state) => state.inviteSend.message
);

export const selectAuthIsLoading = createSelector(selectAuthState, (state) => state.isLoading);
