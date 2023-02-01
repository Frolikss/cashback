import { asyncGetUsers } from '../actions/asyncGetUsers';

export const getUsersReducer = (builder) => {
  builder
    .addCase(asyncGetUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncGetUsers.fulfilled, (state, payload) => {
      state.isLoading = false;
      state.users = payload;
    })
    .addCase(asyncGetUsers.rejected, (state) => {
      state.isLoading = false;
      state.isAuthorized = false;
    });
};
