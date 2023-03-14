import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '@interfaces';
import { loginUserReducer, registerUserReducer, setRegisteredUserReducer } from '@modules';

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
    setRegisteredUserReducer(builder);
  }
});

export const authReducer = slice.reducer;
