import { authReducer } from '@auth';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersReducers } from '@users';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducers
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
