import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    updateContact: (state, action) => {
      const { index, updatedContact } = action.payload;
      state[index] = updatedContact;
    },
    deleteContact: (state, action) => {
      const index = action.payload; // The payload should be the index of the contact to delete
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact, updateContact} = contactsSlice.actions;

export default contactsSlice.reducer;
