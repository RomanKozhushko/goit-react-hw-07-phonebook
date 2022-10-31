import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';

// 1/ Робимо Action creator
const persistConfig = { key: 'contacts', storage };

// 2/ Робимо Reducer щоб обробляти Action
const persistedReduсer = persistReducer(persistConfig, contactsReducer);

// 3/ Створюємо Store для реєстрації та ініціалізації
const store = configureStore({
  reducer: { contacts: persistedReduсer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);
export { store, persistor };
