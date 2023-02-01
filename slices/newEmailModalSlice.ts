import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: any } = {
  value: false,
};

export const newEmailModalSlice = createSlice({
  name: 'newEmailModal',
  initialState,
  reducers: {
    setShowNewEmailModal: (state, value: PayloadAction<boolean>) => {
      state.value = value;
    },
  },
});

export const { setShowNewEmailModal } = newEmailModalSlice.actions;
export const showNewEmailModal = (state: RootState) =>
  state.newEmailModal.value.payload;
export default newEmailModalSlice.reducer;
