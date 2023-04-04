import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { UNAUTHORIZED_ERROR_MASSAGE } from '@shared/constants';
import { handleError } from '@shared/lib';
import { User } from '@shared/types';
import { usersApi } from '@widgets/users-view-type/apis';

export const setSelfAction = createAction<User>('SET_SELF');

export const asyncGetCurrentUser = createAsyncThunk(
  'GET_CURRENT_USER',
  async (_: void, { rejectWithValue }) => {
    try {
      const { data } = await usersApi.getCurrentUser();
      return data;
    } catch (error) {
      handleError(error, UNAUTHORIZED_ERROR_MASSAGE);
      return rejectWithValue(error);
    }
  }
);
