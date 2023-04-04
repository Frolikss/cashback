import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../app/model/store';

const selectAuthState = (state: RootState) => state.auth;

export const selectRegisteredUser = createSelector(
  selectAuthState,
  (state) => state.registeredUser
);

export const selectAuthIsLoading = createSelector(selectAuthState, (state) => state.isLoading);

export const selectAuth = createSelector(selectAuthState, ({ isLoading, registeredUser }) => ({
  isLoading,
  registeredUser
}));
