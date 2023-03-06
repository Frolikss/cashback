import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { UNAUTHORIZED_ERROR_MASSAGE } from '@constants';
import { User } from '@interfaces';
import { userSelfApi } from '@apis';
import { handleError } from '@helpers';

export const setSelfAction = createAction<User>('SET_SELF');

export const asyncGetCurrentUser = createAsyncThunk(
  'GET_CURRENT_USER',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userSelfApi.getCurrentUser();
      return data;
    } catch (error) {
      handleError(error, UNAUTHORIZED_ERROR_MASSAGE);
      return rejectWithValue(error);
    }
  }
);
