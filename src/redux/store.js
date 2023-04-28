import { filtersReducer } from './filtersSlice';
import { contactReducer } from './contactsSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filtersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
