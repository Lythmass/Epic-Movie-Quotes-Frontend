import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: any; quotes: any; delete: any; edit: any } = {
  value: false,
  quotes: {},
  delete: 0,
  edit: 0,
};

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    setAddQuoteModal: (state, value: PayloadAction<boolean>) => {
      state.value = value;
    },
    setQuotes: (state, value: PayloadAction<object>) => {
      state.quotes = value;
    },
    setQuoteDeleteConfirmationModal: (state, value: PayloadAction<number>) => {
      state.delete = value;
    },
    setEditQuote: (state, value: PayloadAction<number>) => {
      state.edit = value;
    },
  },
});

export const {
  setAddQuoteModal,
  setQuotes,
  setQuoteDeleteConfirmationModal,
  setEditQuote,
} = quotesSlice.actions;
export const addQuoteModal = (state: RootState) => state.quotes.value.payload;
export const getQuotes = (state: RootState) => state.quotes.quotes.payload;
export const quoteDeleteConfirmationModal = (state: RootState) =>
  state.quotes.delete.payload;
export const editQuote = (state: RootState) => state.quotes.edit.payload;
export default quotesSlice.reducer;
