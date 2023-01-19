import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthApi } from '@apis';

export const sendLoginInfo = createAsyncThunk('login', async ({ email, password }, thunkAPI) => {
  try {
    const response = await AuthApi.sendLoginInfo(email, password);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
