import { createSlice } from '@reduxjs/toolkit';
import { UsersState } from '@interfaces';
import { getUsersReducer } from '@modules';

const initialState: UsersState = {
  isAuthorized: false,
  isLoading: false,
  list: null
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getUsersReducer(builder);
  }
});

export const usersReducers = slice.reducer;
