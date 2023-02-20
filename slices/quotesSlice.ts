import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: {
  value: boolean;
  quotes: any;
  delete: number;
  edit: number;
  viewQuote: number;
} = {
  value: false,
  quotes: [],
  delete: 0,
  edit: 0,
  viewQuote: 0,
};

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    setAddQuoteModal: (state, value: PayloadAction<boolean>) => {
      state.value = value.payload;
    },
    setQuotes: (state, value: PayloadAction<object[]>) => {
      state.quotes = value.payload;
    },
    setQuoteDeleteConfirmationModal: (state, value: PayloadAction<number>) => {
      state.delete = value.payload;
    },
    setEditQuote: (state, value: PayloadAction<number>) => {
      state.edit = value.payload;
    },
    setViewQuote: (state, value: PayloadAction<number>) => {
      state.viewQuote = value.payload;
    },
  },
});

export const {
  setAddQuoteModal,
  setQuotes,
  setQuoteDeleteConfirmationModal,
  setEditQuote,
  setViewQuote,
} = quotesSlice.actions;
export const addQuoteModal = (state: RootState) => state.quotes.value;
export const getQuotes = (state: RootState) => state.quotes.quotes;
export const quoteDeleteConfirmationModal = (state: RootState) =>
  state.quotes.delete;
export const editQuote = (state: RootState) => state.quotes.edit;
export const getViewQuote = (state: RootState) => state.quotes.viewQuote;
export default quotesSlice.reducer;
