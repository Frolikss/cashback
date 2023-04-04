import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from '../../types/auth.state.interfaces';
import { RegisteredUser } from '../../types/user.interfaces';
import { asyncInviteNewUser, asyncLogin, asyncRegister, setRegisteredUserAction } from './actions';

export const loginUserReducer = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder
    .addCase(asyncLogin.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncLogin.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(asyncLogin.rejected, (state) => {
      state.isLoading = false;
    });
};

export const registerUserReducer = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder
    .addCase(asyncRegister.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncRegister.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(asyncRegister.rejected, (state) => {
      state.isLoading = false;
    });
};

export const inviteNewUserReducer = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder
    .addCase(asyncInviteNewUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncInviteNewUser.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(asyncInviteNewUser.rejected, (state) => {
      state.isLoading = false;
    });
};

export const setRegisteredUserReducer = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder.addCase(setRegisteredUserAction, (state, { payload }: PayloadAction<RegisteredUser>) => {
    state.registeredUser = payload;
  });
};
