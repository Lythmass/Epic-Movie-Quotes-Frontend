import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: string; query: string } = {
  value: '',
  query: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchType: (state, value: PayloadAction<string>) => {
      state.value = value.payload;
    },
    setQuery: (state, value: PayloadAction<string>) => {
      state.query = value.payload;
    },
  },
});

export const { setSearchType, setQuery } = searchSlice.actions;
export const getSearchType = (state: RootState) => state.search.value;
export const getQuery = (state: RootState) => state.search.query;

export default searchSlice.reducer;
