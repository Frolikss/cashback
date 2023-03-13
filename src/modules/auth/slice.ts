import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '@interfaces';
import { loginUserReducer, partialRegisterUser, registerUserReducer } from '@modules';

const initialState: AuthState = {
  isLoading: false,
  registerUser: null
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    loginUserReducer(builder);
    registerUserReducer(builder);
    partialRegisterUser(builder);
  }
});

export const authReducer = slice.reducer;
