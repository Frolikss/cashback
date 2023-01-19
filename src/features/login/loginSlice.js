import { createSlice } from '@reduxjs/toolkit';
import { authUserReducer } from '@features';

const initialState = {
  isLoading: false,
  isAuthorized: false,
  userData: {}
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    authUserReducer(builder);
  }
});

export const loginReducer = loginSlice.reducer;
