import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer } from './modules/login/authSlice';

const rootReducer = combineReducers({
  authReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
