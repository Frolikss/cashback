import { createAsyncThunk } from '@reduxjs/toolkit';
import { UNAUTHORIZED_ERROR_MASSAGE } from '@constants';
import { UsersPayload } from '@interfaces';
import { usersApi } from '@apis';
import { handleError } from '@helpers';

export const asyncGetUsers = createAsyncThunk(
  'GET_USERS',
  async (payload: UsersPayload, { rejectWithValue }) => {
    try {
      const { data } = await usersApi.getUsers(payload);
      return data;
    } catch (error) {
      handleError(error, UNAUTHORIZED_ERROR_MASSAGE);
      return rejectWithValue(error);
    }
  }
);
