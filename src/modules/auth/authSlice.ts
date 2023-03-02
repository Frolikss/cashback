import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '@constants';
import { loginUserReducer } from '@auth';

const initialState: AuthState = {
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
