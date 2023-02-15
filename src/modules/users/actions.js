import { usersApi, userSelfApi } from '@apis/CashbackUsersApi';
import { UNAUTHORIZED_ERROR_MASSAGE } from '@constants';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { handleError } from '@utils';

export const setSelfAction = createAction('setSelf');

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

export const asyncGetUsers = createAsyncThunk('getUsers', async (payload, thunkAPI) => {
  try {
    const { data } = await usersApi.getUsers(payload);
    return data;
  } catch (error) {
    handleError(error, UNAUTHORIZED_ERROR_MASSAGE);
    return thunkAPI.rejectWithValue(error.response);
  }
});
