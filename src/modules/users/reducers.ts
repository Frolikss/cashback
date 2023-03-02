import { User, UsersState } from '@interfaces';
import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { asyncGetUsers } from '@modules';

export const getUsersReducer = (builder: ActionReducerMapBuilder<UsersState>) => {
  builder
    .addCase(asyncGetUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncGetUsers.fulfilled, (state, { payload }: PayloadAction<User[]>) => {
      state.isLoading = false;
      state.list = payload;
    })
    .addCase(asyncGetUsers.rejected, (state) => {
      state.isLoading = false;
    });
};
