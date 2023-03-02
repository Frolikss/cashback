import { createSlice } from '@reduxjs/toolkit';
import { UsersState } from '@constants';
import { getUsersReducer } from '@users';

const initialState: UsersState = {
  isAuthorized: false,
  isLoading: false,
  users: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getUsersReducer(builder);
  }
});

export const usersReducers = usersSlice.reducer;
