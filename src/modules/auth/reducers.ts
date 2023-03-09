import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { AuthState } from '@interfaces';
import { asyncLogin, asyncRegister } from '@modules';

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
