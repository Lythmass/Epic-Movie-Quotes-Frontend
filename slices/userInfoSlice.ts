import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

type user = {
  id: number;
  name: string;
  profile_picture: string;
  email: string;
  google_id: string | null;
  emails: any;
};

const initialState: {
  value: user;
} = {
  value: {
    id: 0,
    name: '',
    profile_picture: '',
    email: '',
    google_id: null,
    emails: {},
  },
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    getData: (state, data: PayloadAction<user>) => {
      state.value = data.payload;
    },
  },
});

export const { getData } = userInfoSlice.actions;
export const selectValue = (state: RootState) => state.userInfo.value;
export default userInfoSlice.reducer;
