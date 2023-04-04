import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from '../../types/auth.state.interfaces';
import {
  inviteNewUserReducer,
  loginUserReducer,
  registerUserReducer,
  setRegisteredUserReducer
} from './reducers';

const initialState: AuthState = {
  isLoading: false,
  registeredUser: null
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    loginUserReducer(builder);
    registerUserReducer(builder);
    inviteNewUserReducer(builder);
    setRegisteredUserReducer(builder);
  }
});

export const authReducer = slice.reducer;
