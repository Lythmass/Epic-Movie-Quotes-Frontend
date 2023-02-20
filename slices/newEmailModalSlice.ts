import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: boolean; showNewEmailModalMobile: boolean } = {
  value: false,
  showNewEmailModalMobile: false,
};

export const newEmailModalSlice = createSlice({
  name: 'newEmailModal',
  initialState,
  reducers: {
    setShowNewEmailModalMobile: (state, value: PayloadAction<boolean>) => {
      state.showNewEmailModalMobile = value.payload;
    },
    setShowNewEmailModal: (state, value: PayloadAction<boolean>) => {
      state.value = value.payload;
    },
  },
});

export const { setShowNewEmailModal, setShowNewEmailModalMobile } =
  newEmailModalSlice.actions;
export const showNewEmailModal = (state: RootState) =>
  state.newEmailModal.value;
export const showNewEmailModalMobile = (state: RootState) =>
  state.newEmailModal.showNewEmailModalMobile;

export default newEmailModalSlice.reducer;
