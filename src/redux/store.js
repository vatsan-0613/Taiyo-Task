import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './ContactSlice'; // Import your reducer(s)

const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Add your reducer(s) here
  },
});

export default store;
