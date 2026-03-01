'use client'

import { CustomArrowProps } from 'react-slick'

const arrowBaseClasses =
	'absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer transition-all duration-300 hidden md:flex'

export const PrevArrow = ({ onClick, style }: CustomArrowProps) => {
	return (
		<div
			className={`${arrowBaseClasses} -left-12.5 group`}
			onClick={onClick}
			style={{ ...style }}
			aria-label='Previous slide'
		>
			<button
				type='button'
				className='flex items-center justify-center w-10 h-10 bg-black border-2 border-yellow-500 rounded-full group-hover:bg-yellow-500/10 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all cursor-pointer'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='#D4AF37'
					strokeWidth='2.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='m15 18-6-6 6-6' />
				</svg>
			</button>
		</div>
	)
}

export const NextArrow = ({ onClick, style }: CustomArrowProps) => {
	return (
		<div
			className={`${arrowBaseClasses} -right-12.5 group`}
			onClick={onClick}
			style={{ ...style }}
			aria-label='Next slide'
		>
			<button
				type='button'
				className='flex items-center justify-center w-10 h-10 bg-black border-2 border-yellow-500 rounded-full group-hover:bg-yellow-500/10 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all cursor-pointer'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='#D4AF37'
					strokeWidth='2.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='m9 18 6-6-6-6' />
				</svg>
			</button>
		</div>
	)
}
