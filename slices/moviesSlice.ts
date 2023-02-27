import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { Genre, MovieType } from 'types';

const initialState: {
  value: Genre[];
  movies: MovieType[];
  deleteValue: boolean;
  editValue: boolean;
} = {
  value: [],
  movies: [],
  deleteValue: false,
  editValue: false,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setGenres: (state, data: PayloadAction<Genre[]>) => {
      state.value = data.payload;
    },
    setMovies: (state, data: PayloadAction<MovieType[]>) => {
      state.movies = data.payload;
    },
    setDeleteMovie: (state, value: PayloadAction<boolean>) => {
      state.deleteValue = value.payload;
    },
    setEditMovie: (state, value: PayloadAction<boolean>) => {
      state.editValue = value.payload;
    },
  },
});

export const { setGenres, setMovies, setDeleteMovie, setEditMovie } =
  moviesSlice.actions;
export const getGenres = (state: RootState) => state.movies.value;
export const getMovies = (state: RootState) => state.movies.movies;
export const getDeleteValue = (state: RootState) => state.movies.deleteValue;
export const getEditValue = (state: RootState) => state.movies.editValue;
export default moviesSlice.reducer;
