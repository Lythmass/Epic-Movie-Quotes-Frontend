import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: any; length: any } = {
  value: {},
  length: 0,
};

export const newsFeedQuotesSlice = createSlice({
  name: 'newsFeedQuotes',
  initialState,
  reducers: {
    setQuotes: (state, value: PayloadAction<object>) => {
      state.value = value;
    },
    setNumberOfQuotes: (state, value: PayloadAction<number>) => {
      state.length = value;
    },
  },
});

export const { setQuotes, setNumberOfQuotes } = newsFeedQuotesSlice.actions;
export const getQuotes = (state: RootState) =>
  state.newsFeedQuotes.value.payload;

export const length = (state: RootState) => state.newsFeedQuotes.length.payload;

export default newsFeedQuotesSlice.reducer;
