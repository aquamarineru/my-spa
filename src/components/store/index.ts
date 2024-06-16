import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import reviewSlice from './reviewSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    reviews: reviewSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
