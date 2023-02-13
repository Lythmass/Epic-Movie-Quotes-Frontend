import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: any } = {
  value: false,
};

export const addMovieModalSlice = createSlice({
  name: 'addMovieModal',
  initialState,
  reducers: {
    setAddMovieModal: (state, value: PayloadAction<boolean>) => {
      state.value = value;
    },
  },
});

export const { setAddMovieModal } = addMovieModalSlice.actions;
export const addMovieModal = (state: RootState) =>
  state.addMovieModal.value.payload;
export default addMovieModalSlice.reducer;
