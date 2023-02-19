import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: {
  value: any;
  length: any;
  postModal: any;
  comments: any;
  likes: any;
  search: any;
  notificationModal: any;
} = {
  value: [],
  length: 0,
  postModal: false,
  comments: [],
  likes: [],
  search: false,
  notificationModal: false,
};

export const newsFeedQuotesSlice = createSlice({
  name: 'newsFeedQuotes',
  initialState,
  reducers: {
    setQuotes: (state, value: PayloadAction<object>) => {
      state.value = value;
    },
    setNumberOfQuotes: (state, value: PayloadAction<number>) => {
      state.length = value;
    },
    setAddPostModal: (state, value: PayloadAction<boolean>) => {
      state.postModal = value;
    },
    setComments: (state, value: PayloadAction<object>) => {
      state.comments = value;
    },
    setLikes: (state, value: PayloadAction<object>) => {
      state.likes = value;
    },
    setSearchModal: (state, value: PayloadAction<boolean>) => {
      state.search = value;
    },
    setNotificationModal: (state, value: PayloadAction<boolean>) => {
      state.notificationModal = value;
    },
  },
});

export const {
  setQuotes,
  setNumberOfQuotes,
  setAddPostModal,
  setComments,
  setLikes,
  setSearchModal,
  setNotificationModal,
} = newsFeedQuotesSlice.actions;
export const getQuotes = (state: RootState) =>
  state.newsFeedQuotes.value.payload;

export const length = (state: RootState) => state.newsFeedQuotes.length.payload;

export const getAddPostModal = (state: RootState) =>
  state.newsFeedQuotes.postModal.payload;

export const getComments = (state: RootState) =>
  state.newsFeedQuotes.comments.payload;

export const getLikes = (state: RootState) =>
  state.newsFeedQuotes.likes.payload;

export const getSearchModal = (state: RootState) =>
  state.newsFeedQuotes.search.payload;

export const getNotificationModal = (state: RootState) =>
  state.newsFeedQuotes.notificationModal.payload;
export default newsFeedQuotesSlice.reducer;
