import { createSlice } from '@reduxjs/toolkit';

import { CurrentUserState } from '@shared/types';

import { getCurrentUserReducer, setSelfReducer } from './reducers';

const initialState: CurrentUserState = {
  isLoading: false,
  isAuthorized: false,
  currentUser: null
};

const slice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getCurrentUserReducer(builder);
    setSelfReducer(builder);
  }
});

export const currentUserReducer = slice.reducer;
