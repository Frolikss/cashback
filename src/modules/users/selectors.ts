import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store';

const selectUsersState = (state: RootState) => state.users;

export const selectUsers = createSelector(selectUsersState, (state) => state.list);

export const selectUserLoading = createSelector(selectUsersState, (state) => state.isLoading);
