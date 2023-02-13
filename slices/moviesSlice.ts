import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: {
  value: any;
  movies: any;
  deleteValue: any;
  editValue: any;
} = {
  value: {},
  movies: [],
  deleteValue: false,
  editValue: false,
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
    setEditMovie: (state, value: PayloadAction<boolean>) => {
      state.editValue = value;
    },
  },
});

export const { setGenres, setMovies, setDeleteMovie, setEditMovie } =
  moviesSlice.actions;
export const getGenres = (state: RootState) => state.movies.value.payload;
export const getMovies = (state: RootState) => state.movies.movies.payload;
export const getDeleteValue = (state: RootState) =>
  state.movies.deleteValue.payload;
export const getEditValue = (state: RootState) =>
  state.movies.editValue.payload;
export default moviesSlice.reducer;
