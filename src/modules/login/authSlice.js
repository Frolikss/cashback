import { loginUserReducer } from '@modules/login';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isAuthorized: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    loginUserReducer(builder);
  }
});

export const authReducer = authSlice.reducer;
