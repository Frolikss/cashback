import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@auth';
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
