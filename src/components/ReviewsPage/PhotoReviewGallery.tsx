import Subtitle from '../UI/Subtitle'
import PhotoReviewCard from './PhotoReviewCard'
import { photos } from '@/public/photoReview'

const PhotoReviewGallery = () => {
	return (
		<div className='flex flex-col'>
			<Subtitle title='Фотогалерея' />
			<div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
				{photos.map((photo, index) => (
					<PhotoReviewCard
						key={index}
						img={photo}
					/>
				))}
			</div>
		</div>
	)
}

export default PhotoReviewGallery
