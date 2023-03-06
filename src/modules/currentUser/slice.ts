import { createSlice } from '@reduxjs/toolkit';
import { CurrentUserState } from '@interfaces';
import { getCurrentUserReducer, setSelfReducer } from '@modules';

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
