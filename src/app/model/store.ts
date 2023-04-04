import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@shared/model/auth';
import { currentUserReducer } from '@shared/model/currentUser';
import { usersReducers } from '@widgets/users-view-type/model/users';

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
