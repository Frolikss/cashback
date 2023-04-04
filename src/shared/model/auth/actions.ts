import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FieldValues } from 'react-hook-form';
import { LOGIN_ERROR_MESSAGE, REGISTRATION_UNKNOWN_ERROR } from '@shared/constants';
import { handleError } from '@shared/lib';
import { setSelfAction } from '@shared/model/currentUser';
import { InviteResponse, RegisteredUser, User } from '@shared/types';
import { authApi } from '../../apis/cashbackAuthApi';

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
  async (payload: RegisteredUser | null, { dispatch, rejectWithValue }) => {
    try {
      const data: User = await new Promise((resolve, reject) => {
        const isResolved = new Date().getSeconds() % 2 === 0;

        if (isResolved) {
          localStorage.setItem(
            'accessToken',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R0ZXN0bWFpbDE5OTBAZ21haWwuY29tIiwiaWQiOiJBVVNETXVGa01Lc3YiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY3ODk2NDA1M30.EtI8VujoUnyQQTV94QDWXev7HBtewU6KeSsYvwRcJQE'
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

export const asyncInviteNewUser = createAsyncThunk(
  'INVITE_USER',
  async (payload: FieldValues, { rejectWithValue }) => {
    try {
      const inviteResponse: InviteResponse = await new Promise((resolve, reject) => {
        const isResolved = new Date().getSeconds() % 2 === 0;

        setTimeout(
          () =>
            isResolved
              ? resolve({ message: 'Invite send', statusCode: 200 })
              : reject({ message: 'Email does not exist', statusCode: 400 }),
          2000
        );
      });
      return inviteResponse;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const setRegisteredUserAction = createAction<RegisteredUser>('SET_REGISTER_USER');
