import { createSlice } from '@reduxjs/toolkit';
import { CurrentUserState } from '@constants';
import { getCurrentUserReducer, setSelfReducer } from '@currentUser';

const initialState: CurrentUserState = {
  isLoading: false,
  isAuthorized: false,
  currentUser: null
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getCurrentUserReducer(builder);
    setSelfReducer(builder);
  }
});

export const currentUserReducer = currentUserSlice.reducer;
