import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: boolean } = {
  value: false,
};

export const mobileConfirmationModalSlice = createSlice({
  name: 'mobileConfirmationModal',
  initialState,
  reducers: {
    setMobileConfirmationModal: (state, value: PayloadAction<boolean>) => {
      state.value = value.payload;
    },
  },
});

export const { setMobileConfirmationModal } =
  mobileConfirmationModalSlice.actions;
export const mobileConfirmationModal = (state: RootState) =>
  state.mobileConfirmationModal.value;
export default mobileConfirmationModalSlice.reducer;
