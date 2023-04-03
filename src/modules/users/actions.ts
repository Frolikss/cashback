import { createAsyncThunk } from '@reduxjs/toolkit';
import { UNAUTHORIZED_ERROR_MASSAGE } from '@constants';
import { handleError } from '@shared/lib';
import { DefaultQueryParams } from '@interfaces';
import { usersApi } from '@apis';

export const asyncGetUsers = createAsyncThunk(
  'GET_USERS',
  async (payload: DefaultQueryParams | void, { rejectWithValue }) => {
    try {
      const { data } = await usersApi.getUsers(payload ?? {});
      return data;
    } catch (error) {
      handleError(error, UNAUTHORIZED_ERROR_MASSAGE);
      return rejectWithValue(error);
    }
  }
);
