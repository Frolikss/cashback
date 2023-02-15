import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUserReducer, getUsersReducer, setSelfReducer } from '@users';

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
    setSelfReducer(builder);
  }
});

export const usersReducers = usersSlice.reducer;
