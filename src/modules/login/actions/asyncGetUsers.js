import { usersApi } from '@apis/CashbackApi';
import { TOAST_ID } from '@constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const asyncGetUsers = createAsyncThunk('getUsers', async (payload, thunkAPI) => {
  try {
    return await usersApi.getUsers(payload);
  } catch (error) {
    const serverError = error.response?.statusText;
    toast.error(serverError ? serverError : 'Unauthorized action, please log in and try again', {
      toastId: TOAST_ID.login
    });
    return thunkAPI.rejectWithValue(error.response);
  }
});
