import { sendLoginInfo } from '@features';

export const authUserReducer = (builder) => {
  builder
    .addCase(sendLoginInfo.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(sendLoginInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    })
    .addCase(sendLoginInfo.rejected, (state) => {
      state.isLoading = false;
      state.userData = null;
    });
};
