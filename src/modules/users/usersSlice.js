import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUserReducer, getUsersReducer } from '@users';

import { setUserReducer } from './reducers';

const initialState = {
  isAuthorized: false,
  currentUser: {},
  users: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    getUsersReducer(builder);
    getCurrentUserReducer(builder);
    setUserReducer(builder);
  }
});

export const usersReducers = usersSlice.reducer;
