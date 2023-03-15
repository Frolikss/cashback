import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FieldValues } from 'react-hook-form';
import { LOGIN_ERROR_MESSAGE, REGISTRATION_UNKNOWN_ERROR } from '@constants';
import { RegisteredUser, User } from '@interfaces';
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
  async (payload: FieldValues, { dispatch, rejectWithValue }) => {
    try {
      const data: User = await new Promise((resolve, reject) => {
        const isResolved = new Date().getSeconds() % 2 === 0;

        isResolved
          ? resolve({ id: '1', email: 'asd@as.com', role: 'USER', phone: '123' })
          : reject({ message: 'Unexpected server error', statusCode: 404 });
      });

      dispatch(setSelfAction(data));
    } catch (error) {
      handleError(error, REGISTRATION_UNKNOWN_ERROR);
      return rejectWithValue(error);
    }
  }
);

export const setRegisteredUserAction = createAction<RegisteredUser>('SET_REGISTER_USER');
