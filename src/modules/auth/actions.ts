import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FieldValues } from 'react-hook-form';
import { LOGIN_ERROR_MESSAGE, REGISTRATION_UNKNOWN_ERROR } from '@constants';
import { RegisterUser, User } from '@interfaces';
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

        if (isResolved) {
          localStorage.setItem(
            'accessToken',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R0ZXN0bWFpbDE5OTBAZ21haWwuY29tIiwiaWQiOiJBVVNETXVGa01Lc3YiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY3ODM2ODc4Nn0.dQoLGm1B_UHCKBCqg-f6yUg-SOXtZq3v_oiz6Nd9H1I'
          );
          resolve({ id: '1', email: 'asd@as.com', role: 'USER', phone: '123' });
        }

        reject({ message: 'Unexpected server error', statusCode: 404 });
      });

      dispatch(setSelfAction(data));
    } catch (error) {
      handleError(error, REGISTRATION_UNKNOWN_ERROR);
      return rejectWithValue(error);
    }
  }
);

export const setPartialRegisterUser = createAction<RegisterUser>('REGISTER_USER');
