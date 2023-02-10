import { usersApi, userSelfApi } from '@apis/CashbackUsersApi';
import { UNAUTHORIZED_ERROR_MASSAGE } from '@constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleError } from '@utils';

export const asyncGetCurrentUser = createAsyncThunk(
  'getCurrentUser',
  async (payload, { rejectWithValue }) => {
    try {
      return await userSelfApi.getCurrentUser(payload);
    } catch (error) {
      handleError(error, UNAUTHORIZED_ERROR_MASSAGE);
      return rejectWithValue(error);
    }
  }
);

export const asyncGetUsers = createAsyncThunk('getUsers', async (payload, thunkAPI) => {
  try {
    return await usersApi.getUsers(payload);
  } catch (error) {
    handleError(error, UNAUTHORIZED_ERROR_MASSAGE);
    return thunkAPI.rejectWithValue(error.response);
  }
});
