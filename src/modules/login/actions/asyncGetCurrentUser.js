import { userSelfApi } from '@apis/CashbackApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const asyncGetCurrentUser = createAsyncThunk(
  'getCurrentUsers',
  async (payload, thunkAPI) => {
    try {
      return await userSelfApi.getCurrentUser(payload);
    } catch (error) {
      toast.warning(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
