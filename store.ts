import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from 'slices/userInfoSlice';
import newEmailModalReducer from 'slices/newEmailModalSlice';

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    newEmailModal: newEmailModalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
