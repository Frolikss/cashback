import { asyncGetCurrentUser } from '../actions/asyncGetCurrentUser';

export const getCurrentUserReducer = (builder) => {
  builder
    .addCase(asyncGetCurrentUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncGetCurrentUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorized = true;
      state.currentUser = payload?.data;
    })
    .addCase(asyncGetCurrentUser.rejected, (state) => {
      state.isLoading = false;
      state.isAuthorized = false;
    });
};
