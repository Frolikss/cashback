import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './features/login/loginSlice';

const rootReducer = combineReducers({
  login: loginReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
