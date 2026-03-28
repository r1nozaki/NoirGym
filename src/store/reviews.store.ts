import { create } from 'zustand'
import { ReviewItem } from '../types/ReviewItem'
import { REVIEWS_ITEMS } from '../constants/reviews'

type ReviewStore = {
	reviews: ReviewItem[]
	addReview: (review: ReviewItem) => void
}

export const useReviewsStore = create<ReviewStore>(set => ({
	reviews: REVIEWS_ITEMS,
	addReview: (review: ReviewItem) =>
		set(state => ({ reviews: [review, ...state.reviews] }))
}))
