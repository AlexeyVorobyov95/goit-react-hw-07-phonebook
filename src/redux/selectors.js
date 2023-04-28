import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectStatusFilter = state => state.filters.filters;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, filter) => {
    if (!filter) return contacts;

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
