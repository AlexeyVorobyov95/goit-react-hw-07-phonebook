import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchAddContact.pending, state => {
        state.isLoading = true;
      })

      .addCase(fetchAddContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })

      .addCase(fetchAddContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchDeleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.items.findIndex(item => item.id === payload);
        state.items.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const contactReducer = contactsSlice.reducer;
