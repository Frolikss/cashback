import { authApi } from '@apis/CashbackApi';
import { TOAST_ID } from '@constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const asyncLogin = createAsyncThunk('login', async (payload, thunkAPI) => {
  try {
    await authApi.signIn(payload);
    toast.success('Login and password are correct. Welcome back', { toastId: TOAST_ID.login });
  } catch (error) {
    const serverError = error.response?.statusText;

    toast.error(serverError ? serverError : 'Something went wrong. Please, try again');
    return thunkAPI.rejectWithValue(error.response);
  }
});
