import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './reducer';
import authReducer from './auth/auth-slice';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
// import storage from 'redux-persist/lib/storage';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: 'filter',
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer),
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export default store;
