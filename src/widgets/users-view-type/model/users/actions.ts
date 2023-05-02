import { createAsyncThunk } from '@reduxjs/toolkit';

import { UNAUTHORIZED_ERROR_MASSAGE } from '@shared/constants';

import { handleError } from '@shared/lib';

import { usersApi } from '../../apis';
import { DefaultQueryParams } from '../../types/default-query-params';

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
