import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { CurrentUserState } from '@constants';
import { asyncGetCurrentUser, setSelfAction } from '@currentUser';

export const getCurrentUserReducer = (builder: ActionReducerMapBuilder<CurrentUserState>) => {
  builder
    .addCase(asyncGetCurrentUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncGetCurrentUser.fulfilled, (state, { payload }) => {
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
  builder.addCase(setSelfAction, (state, { payload }) => {
    state.isAuthorized = !!payload;
  });
};
