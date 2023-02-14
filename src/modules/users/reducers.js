import { asyncGetCurrentUser, asyncGetUsers, setSelfAction } from '@users';

export const getCurrentUserReducer = (builder) => {
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

export const getUsersReducer = (builder) => {
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

export const setSelfReducer = (builder) => {
  builder.addCase(setSelfAction, (state, { payload }) => {
    state.isAuthorized = !!payload;
    state.currentUser = payload;
  });
};
