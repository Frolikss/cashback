import { createAsyncThunk } from '@reduxjs/toolkit';
import { UNAUTHORIZED_ERROR_MASSAGE } from '@constants';
import { usersApi } from '@apis';
import { handleError } from '@utils';

export const asyncGetUsers = createAsyncThunk('getUsers', async (payload, { rejectWithValue }) => {
  try {
    const { data } = await usersApi.getUsers(payload);
    return data;
  } catch (error) {
    handleError(error, UNAUTHORIZED_ERROR_MASSAGE);
    return rejectWithValue(error);
  }
});
