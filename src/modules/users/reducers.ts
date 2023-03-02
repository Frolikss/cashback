import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UsersState } from '@constants';
import { asyncGetUsers } from '@users';

export const getUsersReducer = (builder: ActionReducerMapBuilder<UsersState>) => {
  builder
    .addCase(asyncGetUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncGetUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.users = payload;
    })
    .addCase(asyncGetUsers.rejected, (state) => {
      state.isLoading = false;
      state.isAuthorized = false;
    });
};
