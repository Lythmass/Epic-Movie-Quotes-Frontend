import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: any; query: any } = {
  value: '',
  query: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchType: (state, value: PayloadAction<string>) => {
      state.value = value;
    },
    setQuery: (state, value: PayloadAction<string>) => {
      state.query = value;
    },
  },
});

export const { setSearchType, setQuery } = searchSlice.actions;
export const getSearchType = (state: RootState) => state.search.value.payload;
export const getQuery = (state: RootState) => state.search.query.payload;

export default searchSlice.reducer;
