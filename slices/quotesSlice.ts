import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: any; quotes: any; delete: any } = {
  value: false,
  quotes: {},
  delete: 0,
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
  },
});

export const { setAddQuoteModal, setQuotes, setQuoteDeleteConfirmationModal } =
  quotesSlice.actions;
export const addQuoteModal = (state: RootState) => state.quotes.value.payload;
export const getQuotes = (state: RootState) => state.quotes.quotes.payload;
export const quoteDeleteConfirmationModal = (state: RootState) =>
  state.quotes.delete.payload;
export default quotesSlice.reducer;
