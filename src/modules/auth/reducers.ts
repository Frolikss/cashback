import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { INVITE_WRONG_EMAIL } from '@constants';
import { AuthState, InviteResponse, RegisteredUser } from '@interfaces';
import { asyncInviteNewUser, asyncLogin, asyncRegister, setRegisteredUserAction } from '@modules';

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
    .addCase(asyncInviteNewUser.fulfilled, (state, { payload }: PayloadAction<InviteResponse>) => {
      state.isLoading = false;
      state.inviteSend.isSuccessful = true;
      state.inviteSend.message = payload.message;
    })
    .addCase(asyncInviteNewUser.rejected, (state) => {
      state.isLoading = false;
      state.inviteSend.isSuccessful = false;
      state.inviteSend.message = INVITE_WRONG_EMAIL;
    });
};

export const setRegisteredUserReducer = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder.addCase(setRegisteredUserAction, (state, { payload }: PayloadAction<RegisteredUser>) => {
    state.registeredUser = payload;
  });
};
