import { sendLoginInfo } from '@modules/login';

export const loginUserReducer = (builder) => {
  builder
    .addCase(sendLoginInfo.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(sendLoginInfo.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(sendLoginInfo.rejected, (state) => {
      state.isLoading = false;
    });
};
