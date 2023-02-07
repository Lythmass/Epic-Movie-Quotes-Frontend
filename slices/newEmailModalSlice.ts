import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: any; showNewEmailModalMobile: any } = {
  value: false,
  showNewEmailModalMobile: false,
};

export const newEmailModalSlice = createSlice({
  name: 'newEmailModal',
  initialState,
  reducers: {
    setShowNewEmailModalMobile: (state, value: PayloadAction<boolean>) => {
      state.showNewEmailModalMobile = value;
    },
    setShowNewEmailModal: (state, value: PayloadAction<boolean>) => {
      state.value = value;
    },
  },
});

export const { setShowNewEmailModal, setShowNewEmailModalMobile } =
  newEmailModalSlice.actions;
export const showNewEmailModal = (state: RootState) =>
  state.newEmailModal.value.payload;
export const showNewEmailModalMobile = (state: RootState) =>
  state.newEmailModal.showNewEmailModalMobile.payload;

export default newEmailModalSlice.reducer;
