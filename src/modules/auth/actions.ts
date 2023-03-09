import { createAsyncThunk } from '@reduxjs/toolkit';
import { FieldValues } from 'react-hook-form';
import { LOGIN_ERROR_MESSAGE, REGISTRATION_UNKNOWN_ERROR } from '@constants';
import { authApi } from '@apis';
import { setSelfAction } from '@modules';
import { handleError } from '@helpers';

export const asyncLogin = createAsyncThunk(
  'LOGIN',
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

export const asyncRegister = createAsyncThunk(
  'REGISTER',
  async (payload: FieldValues, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => {
        const isResolved = new Date().getSeconds() % 2 === 0;

        if (isResolved) {
          return resolve;
        }

        throw new Error();
      });
    } catch (error) {
      handleError(error, REGISTRATION_UNKNOWN_ERROR);
      return rejectWithValue(error);
    }
  }
);
