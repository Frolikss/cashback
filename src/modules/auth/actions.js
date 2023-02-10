import { authApi } from '@apis/CashbackAuthApi';
import { LOGIN_ERROR_MESSAGE } from '@constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleError } from '@utils';

export const asyncLogin = createAsyncThunk(
  'login',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await authApi.signIn(payload);
      dispatch(asyncSetUser(response));
    } catch (error) {
      handleError(error, LOGIN_ERROR_MESSAGE);
      return rejectWithValue(error.response);
    }
  }
);

export const asyncSetUser = createAsyncThunk(
  'auth',
  (payload, { rejectWithValue, fulfillWithValue }) => {
    if (payload && payload.status <= 299) {
      fulfillWithValue(payload);
    } else {
      rejectWithValue();
    }
  }
);
