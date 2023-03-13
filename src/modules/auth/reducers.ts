import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, RegisteredUser } from '@interfaces';
import { asyncLogin, asyncRegister, setRegisteredUserAction } from '@modules';

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

export const setRegisteredUserReducer = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder.addCase(setRegisteredUserAction, (state, { payload }: PayloadAction<RegisteredUser>) => {
    state.registeredUser = payload;
  });
};
