import ReviewsSlider from '../Homepage/ReviewsSection/ReviewSlider'
import Subtitle from '../UI/Subtitle'
import PhotoReviewGallery from './PhotoReviewGallery'
import ReviewForm from './ReviewForm'

const ReviewsContent = () => {
	return (
		<div className='flex flex-col '>
			<PhotoReviewGallery />
			<div className='mt-20'>
				<Subtitle title='Залиште свої враження' />
				<ReviewForm />
			</div>
			<div className='mt-20'>
				<Subtitle title='Відгуки' />
				<ReviewsSlider />
			</div>
		</div>
	)
}

export default ReviewsContent
