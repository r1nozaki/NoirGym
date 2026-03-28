import ReviewsSlider from '../Homepage/ReviewsSection/ReviewSlider'
import Subtitle from '../UI/Subtitle'
import PhotoReviewGallery from './PhotoReviewGallery'

const ReviewsContent = () => {
	return (
		<div className='flex flex-col '>
			<PhotoReviewGallery />
			{/* Форма яка буде добавляти відгуки в ReviewSlider */}
			<div className='mt-20'>
				<Subtitle title='Відгуки' />
				<ReviewsSlider />
			</div>
		</div>
	)
}

export default ReviewsContent
