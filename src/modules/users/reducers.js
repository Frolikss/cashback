import { asyncGetCurrentUser, asyncGetUsers } from './actions';
import { asyncSetUser } from '../auth';

export const getCurrentUserReducer = (builder) => {
  builder
    .addCase(asyncGetCurrentUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncGetCurrentUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.currentUser = payload?.data;
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
      state.users = payload.data;
    })
    .addCase(asyncGetUsers.rejected, (state) => {
      state.isLoading = false;
      state.isAuthorized = false;
    });
};

export const setUserReducer = (builder) => {
  builder
    .addCase(asyncSetUser.fulfilled, (state, { payload }) => {
      state.isAuthorized = true;
      state.currentUser = payload?.data;
    })
    .addCase(asyncSetUser.rejected, (state) => {
      state.isLoading = false;
      state.isAuthorized = false;
    });
};
