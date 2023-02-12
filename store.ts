import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from 'slices/userInfoSlice';
import newEmailModalReducer from 'slices/newEmailModalSlice';
import mobileConfirmationReducer from 'slices/mobileConfirmationModalSlice';
import addMovieModalReducer from 'slices/addMovieModalSlice';
import moviesReducer from 'slices/moviesSlice';

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    newEmailModal: newEmailModalReducer,
    mobileConfirmationModal: mobileConfirmationReducer,
    addMovieModal: addMovieModalReducer,
    movies: moviesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
