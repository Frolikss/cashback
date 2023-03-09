import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '@interfaces';
import { loginUserReducer, registerUserReducer } from '@modules';

const initialState: AuthState = {
  isLoading: false
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    loginUserReducer(builder);
    registerUserReducer(builder);
  }
});

export const authReducer = slice.reducer;
