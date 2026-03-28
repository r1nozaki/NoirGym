import Image, { type StaticImageData } from 'next/image'

type Props = {
	img: string | StaticImageData
}

const PhotoReviewCard = ({ img }: Props) => {
	return (
		<div className='relative h-114 w-full bg-[#111] border-2 border-[#e8a21a] rounded-lg transition-transform duration-300 hover:-translate-y-2'>
			<Image
				src={img}
				alt='Photo review'
				fill
				className='object-cover rounded-lg'
			/>
		</div>
	)
}

export default PhotoReviewCard
