import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { CurrentUserState, User } from '@interfaces';
import { asyncGetCurrentUser, setSelfAction } from '@modules';

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
