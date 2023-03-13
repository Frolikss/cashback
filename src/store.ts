import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session';
import { authReducer, currentUserReducer, usersReducers } from '@modules';

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

// const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
