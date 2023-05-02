import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { CurrentUserState, User } from '@shared/types';

import { asyncGetCurrentUser, setSelfAction } from './actions';

export const getCurrentUserReducer = (builder: ActionReducerMapBuilder<CurrentUserState>) => {
  builder
    .addCase(asyncGetCurrentUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncGetCurrentUser.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.isLoading = false;
      state.currentUser = payload;
      state.isAuthorized = true;
    })
    .addCase(asyncGetCurrentUser.rejected, (state) => {
      state.isLoading = false;
      state.isAuthorized = false;
    });
};

export const setSelfReducer = (builder: ActionReducerMapBuilder<CurrentUserState>) => {
  builder.addCase(setSelfAction, (state, { payload }: PayloadAction<User>) => {
    state.isAuthorized = Boolean(payload);
  });
};
