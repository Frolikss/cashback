import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer, currentUserReducer, usersReducers } from '@modules';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducers,
  currentUser: currentUserReducer
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
