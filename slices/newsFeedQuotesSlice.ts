import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { NotificationType, PostType } from 'types';

const initialState: {
  value: PostType[];
  length: number;
  postModal: boolean;
  comments: object[];
  likes: { id: number; quote_id: number; user_id: number }[];
  search: boolean;
  notificationModal: boolean;
  notifications: NotificationType[];
} = {
  value: [],
  length: 0,
  postModal: false,
  comments: [],
  likes: [],
  search: false,
  notificationModal: false,
  notifications: [],
};

export const newsFeedQuotesSlice = createSlice({
  name: 'newsFeedQuotes',
  initialState,
  reducers: {
    setQuotes: (state, value: PayloadAction<PostType[]>) => {
      state.value = value.payload;
    },
    setNumberOfQuotes: (state, value: PayloadAction<number>) => {
      state.length = value.payload;
    },
    setAddPostModal: (state, value: PayloadAction<boolean>) => {
      state.postModal = value.payload;
    },
    setComments: (state, value: PayloadAction<object[]>) => {
      state.comments = value.payload;
    },
    setLikes: (
      state,
      value: PayloadAction<{ id: number; quote_id: number; user_id: number }[]>
    ) => {
      state.likes = value.payload;
    },
    setSearchModal: (state, value: PayloadAction<boolean>) => {
      state.search = value.payload;
    },
    setNotificationModal: (state, value: PayloadAction<boolean>) => {
      state.notificationModal = value.payload;
    },
    setNotifications: (state, value: PayloadAction<NotificationType[]>) => {
      state.notifications = value.payload;
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
  setNotifications,
} = newsFeedQuotesSlice.actions;
export const getQuotes = (state: RootState) => state.newsFeedQuotes.value;

export const length = (state: RootState) => state.newsFeedQuotes.length;

export const getAddPostModal = (state: RootState) =>
  state.newsFeedQuotes.postModal;

export const getComments = (state: RootState) => state.newsFeedQuotes.comments;

export const getLikes = (state: RootState) => state.newsFeedQuotes.likes;

export const getSearchModal = (state: RootState) => state.newsFeedQuotes.search;

export const getNotificationModal = (state: RootState) =>
  state.newsFeedQuotes.notificationModal;

export const getNotificationValues = (state: RootState) =>
  state.newsFeedQuotes.notifications;
export default newsFeedQuotesSlice.reducer;
