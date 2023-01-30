import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: { value: any } = {
  value: {},
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    getData: (state, data: PayloadAction<Object>) => {
      state.value = data;
    },
  },
});

export const { getData } = userInfoSlice.actions;
export const selectValue = (state: RootState) => state.userInfo.value.payload;
export default userInfoSlice.reducer;
