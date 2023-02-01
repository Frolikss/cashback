import { asyncLogin } from '@modules/login';

export const loginUserReducer = (builder) => {
  builder
    .addCase(asyncLogin.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncLogin.fulfilled, (state) => {
      state.isLoading = false;
      state.isAuthorized = true;
    })
    .addCase(asyncLogin.rejected, (state) => {
      state.isLoading = false;
    });
};
