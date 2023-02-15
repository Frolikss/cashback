import { loginUserReducer } from '@auth';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false
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
