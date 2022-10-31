import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI } from 'components/ContactsAPI/contactsAPI';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contactsSlice';

// // 1/ Робимо Action creator
// const persistConfig = { key: 'contacts', storage };

// // 2/ Робимо Reducer щоб обробляти Action
// const persistedReduсer = persistReducer(persistConfig, contactsReducer);


export const store = configureStore({
    reducer: { [contactsAPI.reducerPath]: contactsAPI.reducer},

    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(contactsAPI.middleware)
});
// const persistor = persistStore(store);
// export { store, persistor };
