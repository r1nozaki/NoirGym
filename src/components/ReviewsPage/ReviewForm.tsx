'use client'

import { useForm, type SubmitHandler } from 'react-hook-form'
import {
	ReviewFormType,
	reviewFormSchema
} from '../validators/review-form.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useReviewsStore } from '@/src/store/reviews.store'
import Input from '../UI/Input'
import { nanoid } from 'nanoid'
import { cn } from '@/lib/utils'

const ReviewForm = () => {
	const { addReview } = useReviewsStore()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useForm<ReviewFormType>({
		resolver: zodResolver(reviewFormSchema),
		mode: 'onBlur'
	})

	const hanleFormSubmit: SubmitHandler<ReviewFormType> = review => {
		addReview({ id: nanoid(), author: review.author, content: review.review })
		reset()
	}
	return (
		<form
			onSubmit={handleSubmit(hanleFormSubmit)}
			className='w-full z-10 space-y-6'
		>
			<Input
				label='Автор'
				placeholder="Введіть ім'я та прізвище"
				error={errors.author?.message}
				{...register('author')}
			/>
			<div className='flex flex-col gap-1 5'>
				<label className='text-[#e8a21a] text-[10px] uppercase tracking-[0.2em] font-bold ml-1'>
					Відгук
				</label>
				<textarea
					{...register('review')}
					placeholder='Залиште відгук'
					className={cn(
						'bg-zinc-900 text-white p-4 border-b-2 border-zinc-800 outline-none transition-all duration-300 min-h-37.5 resize-none',
						'focus:border-[#e8a21a] focus:bg-zinc-800/50 placeholder:text-zinc-600',
						{
							'border-red-500/50': errors.review?.message,
							'focus:border-red-500': errors.review?.message
						}
					)}
				/>
				<div className='h-4'>
					{errors.review && (
						<span className='text-red-500 text-[10px] uppercase font-bold tracking-tighter'>
							{errors.review.message}
						</span>
					)}
				</div>
			</div>
			<button
				type='submit'
				disabled={isSubmitting}
				className='w-full bg-[#e8a21a] text-black font-black py-5 uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 disabled:opacity-50'
			>
				{isSubmitting ? 'Відправка...' : 'Відправити відгук'}
			</button>
		</form>
	)
}

export default ReviewForm
