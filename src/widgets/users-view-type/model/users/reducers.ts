import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@shared/types';

import { UsersState } from '../../types/users.state.interfaces';
import { asyncGetUsers } from './actions';

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
