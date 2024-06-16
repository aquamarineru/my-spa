// src/store/reviewsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Review {
  name: string;
  review: string;
  date: string;
}

interface ReviewsState {
  reviews: Review[];
  currentPage: number;
  reviewsPerPage: number;
}

const initialState: ReviewsState = {
  reviews: [],
  currentPage: 1,
  reviewsPerPage: 10,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews(state, action: PayloadAction<Review[]>) {
      state.reviews = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setReviews, setCurrentPage } = reviewsSlice.actions;
export default reviewsSlice.reducer;
