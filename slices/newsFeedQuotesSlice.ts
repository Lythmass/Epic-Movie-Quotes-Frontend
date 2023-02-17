import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: any } = {
  value: {},
};

export const newsFeedQuotesSlice = createSlice({
  name: 'newsFeedQuotes',
  initialState,
  reducers: {
    setQuotes: (state, value: PayloadAction<object>) => {
      state.value = value;
    },
  },
});

export const { setQuotes } = newsFeedQuotesSlice.actions;
export const getQuotes = (state: RootState) =>
  state.newsFeedQuotes.value.payload;

export default newsFeedQuotesSlice.reducer;
