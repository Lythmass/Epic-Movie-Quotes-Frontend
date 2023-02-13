import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: any; movies: any; deleteValue: any } = {
  value: {},
  movies: [],
  deleteValue: false,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setGenres: (state, data: PayloadAction<Object>) => {
      state.value = data;
    },
    setMovies: (state, data: PayloadAction<Object>) => {
      state.movies = data;
    },
    setDeleteMovie: (state, value: PayloadAction<boolean>) => {
      state.deleteValue = value;
    },
  },
});

export const { setGenres, setMovies, setDeleteMovie } = moviesSlice.actions;
export const getGenres = (state: RootState) => state.movies.value.payload;
export const getMovies = (state: RootState) => state.movies.movies.payload;
export const getDeleteValue = (state: RootState) =>
  state.movies.deleteValue.payload;
export default moviesSlice.reducer;
