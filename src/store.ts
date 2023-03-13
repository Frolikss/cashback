import { combineReducers, configureStore } from '@reduxjs/toolkit';
// imports for redux-persist
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session';
import { authReducer, currentUserReducer, usersReducers } from '@modules';

// config parameters for redux-persist
// const rootPersistConfig = {
//   key: 'root',
//   storage
// };
//
// const authPersistConfig = {
//   key: 'auth',
//   storage: storageSession
// };

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducers,
  currentUser: currentUserReducer
});

// created persist reducer to make store work
// const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

// required by redux-persist in order to persist data
// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
