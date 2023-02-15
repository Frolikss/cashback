import { authApi } from '@apis/CashbackAuthApi';
import { LOGIN_ERROR_MESSAGE } from '@constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setSelfAction } from '@users';
import { handleError } from '@utils';

export const asyncLogin = createAsyncThunk(
  'login',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await authApi.signIn(payload);
      dispatch(setSelfAction(response.data));
    } catch (error) {
      handleError(error, LOGIN_ERROR_MESSAGE);
      return rejectWithValue(error.response);
    }
  }
);
