import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: any; quotes: any } = {
  value: false,
  quotes: {},
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
  },
});

export const { setAddQuoteModal, setQuotes } = quotesSlice.actions;
export const addQuoteModal = (state: RootState) => state.quotes.value.payload;
export const getQuotes = (state: RootState) => state.quotes.quotes.payload;
export default quotesSlice.reducer;
