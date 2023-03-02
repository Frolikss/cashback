import { User } from '@interfaces';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { UNAUTHORIZED_ERROR_MASSAGE } from '@constants';
import { userSelfApi } from '@apis';
import { handleError } from '@utils';

export const setSelfAction = createAction<User>('setSelf');

export const asyncGetCurrentUser = createAsyncThunk(
  'getCurrentUser',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await userSelfApi.getCurrentUser(payload);
      return data;
    } catch (error) {
      handleError(error, UNAUTHORIZED_ERROR_MASSAGE);
      return rejectWithValue(error);
    }
  }
);
