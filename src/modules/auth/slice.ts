import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '@interfaces';
import {
  inviteNewUserReducer,
  loginUserReducer,
  registerUserReducer,
  setRegisteredUserReducer
} from '@modules';

const initialState: AuthState = {
  isLoading: false,
  inviteSend: {
    isSuccessful: false,
    message: ''
  },
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
