import type { ReviewItem } from '@/src/types/ReviewItem'

const ReviewCard = ({ author, content }: ReviewItem) => {
	return (
		<div className='group relative h-70 m-2 p-8 bg-[#111] border border-white/10 rounded-lg flex flex-col justify-between transition-all duration-300 hover:border-yellow-500/50 hover:translate-y-1.5'>
			<p className='relative z-10 text-white/70 italic leading-relaxed'>
				{content}
			</p>

			<div className='border-t border-white/10 pt-4'>
				<h3 className='text-sm uppercase tracking-widest font-bold text-yellow-500'>
					{author}
				</h3>
			</div>
		</div>
	)
}

export default ReviewCard
