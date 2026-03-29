import { create } from 'zustand'
import { ReviewItem } from '../types/ReviewItem'
import { REVIEWS_ITEMS } from '../constants/reviews'
import { persist } from 'zustand/middleware'

type ReviewStore = {
	reviews: ReviewItem[]
	addReview: (review: ReviewItem) => void
}

export const useReviewsStore = create<ReviewStore>()(
	persist(
		set => ({
			reviews: REVIEWS_ITEMS,
			addReview: review =>
				set(state => ({
					reviews: [review, ...state.reviews]
				}))
		}),
		{
			name: 'noir-reviews-storage'
		}
	)
)
