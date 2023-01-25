import { checkLoginInfo } from '@modules/login';

export const loginUserReducer = (builder) => {
  builder
    .addCase(checkLoginInfo.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(checkLoginInfo.fulfilled, (state) => {
      state.isLoading = false;
      state.isAuthorized = true;
    })
    .addCase(checkLoginInfo.rejected, (state) => {
      state.isLoading = false;
    });
};
