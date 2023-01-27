import { authApi } from '@apis/AuthApi';
import { TOAST_ID } from '@constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const checkLoginInfo = createAsyncThunk('login', async (payload, thunkAPI) => {
  try {
    await authApi.checkLoginInfo({
      email: payload.email,
      password: payload.password
    });
    toast.success('Logged In', { toastId: TOAST_ID.login });
  } catch (error) {
    toast.error('Something went wrong. Please, try again');
    return thunkAPI.rejectWithValue(error.response);
  }
});
