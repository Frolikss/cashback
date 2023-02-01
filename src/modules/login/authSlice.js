import { loginUserReducer } from '@modules/login';
import { createSlice } from '@reduxjs/toolkit';

import { getCurrentUserReducer } from './reducers/getCurrentUserReducer';
import { getUsersReducer } from './reducers/getUsersReducer';

const initialState = {
  isLoading: false,
  isAuthorized: false,
  currentUser: {},
  users: []
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    loginUserReducer(builder);
    getUsersReducer(builder);
    getCurrentUserReducer(builder);
  }
});

export const authReducer = authSlice.reducer;
