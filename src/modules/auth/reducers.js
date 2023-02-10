import { asyncLogin } from './actions';

export const loginUserReducer = (builder) => {
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
