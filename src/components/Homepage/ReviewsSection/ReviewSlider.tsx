'use client'

import Slider from 'react-slick'
import type { Settings } from 'react-slick'
import ReviewCard from './ReviewCard'
import { REVIEWS_ITEMS } from '@/src/constants/reviews'
import { NextArrow, PrevArrow } from '../../UI/SliderArrow'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ReviewsSlider() {
	const settings: Settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true
	}
	return (
		<div className='slider-container'>
			<Slider {...settings}>
				{REVIEWS_ITEMS.map(review => (
					<ReviewCard
						key={review.id}
						id={review.id}
						author={review.author}
						content={review.content}
					/>
				))}
			</Slider>
		</div>
	)
}

export default ReviewsSlider
