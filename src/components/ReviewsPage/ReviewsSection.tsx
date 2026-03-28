import Title from '../UI/Title'
import ReviewsContent from './ReviewsContent'

const ReviewsSection = () => {
	return (
		<section className=' px-20 py-15'>
			<Title
				mainText='Естетика результату'
				secondText='Ваші досягнення — наша найкраща рекомендація'
			/>
			<ReviewsContent />
		</section>
	)
}

export default ReviewsSection
