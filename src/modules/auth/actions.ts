import { createAsyncThunk } from '@reduxjs/toolkit';
import { FieldValues } from 'react-hook-form';
import { LOGIN_ERROR_MESSAGE } from '@constants';
import { authApi } from '@apis';
import { setSelfAction } from '@modules';
import { handleError } from '@utils';

export const asyncLogin = createAsyncThunk(
  'login',
  async (payload: FieldValues, { dispatch, rejectWithValue }) => {
    try {
      const response = await authApi.signIn(payload);
      dispatch(setSelfAction(response.data));
    } catch (error) {
      handleError(error, LOGIN_ERROR_MESSAGE);
      return rejectWithValue(error);
    }
  }
);
