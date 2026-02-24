import React from 'react'
import styled from 'styled-components'

const SubscriptionCards = () => {
	return (
		<StyledWrapper>
			<div className='cards-container'>
				<div className='card one'>
					<div className='card-content'>
						<div className='card-label'>NOIR GYM</div>
						<div className='gym-icon'>🏋️‍♂️</div>
						<div className='bg-text'>BASE</div>
					</div>
					<div className='cardDetails'>
						<div className='cardDetailsHeader'>Базовий</div>
						<div className='cardDetailsButton'>Більше деталей</div>
					</div>
				</div>

				<div className='card two'>
					<div className='card-content'>
						<div className='card-label'>NOIR GYM</div>
						<div className='gym-icon'>⚡</div>
						<div className='bg-text'>LIGHT</div>
					</div>
					<div className='cardDetails'>
						<div className='cardDetailsHeader'>Light</div>
						<div className='cardDetailsButton'>Більше деталей</div>
					</div>
				</div>

				<div className='card three'>
					<div className='card-content'>
						<div className='card-label'>NOIR GYM</div>
						<div className='gym-icon'>🔥</div>
						<div className='bg-text'>YOUTH</div>
					</div>
					<div className='cardDetails'>
						<div className='cardDetailsHeader'>Молодь+</div>
						<div className='cardDetailsButton'>Більше деталей</div>
					</div>
				</div>
			</div>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
	.cards-container {
		position: absolute;
		right: 250px;
		top: 50%;
		transform: translateY(-50%);
	}

	.card {
		position: absolute;
		width: 260px;
		height: 180px;
		border-radius: 16px;
		transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: -10px 20px 40px rgba(0, 0, 0, 0.6);
		animation: floatOne 5s ease-in-out infinite;
	}

	.card::before {
		content: '';
		position: absolute;
		top: 0;
		left: -150%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.05),
			transparent
		);
		transition: 0.5s;
		z-index: 1;
	}

	.card:hover::before {
		left: 150%;
	}

	.card-content {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 20px;
		z-index: 2;
	}

	.card-label {
		font-size: 10px;
		font-weight: 900;
		letter-spacing: 3px;
		color: #e8a21a;
		opacity: 0.8;
	}

	.gym-icon {
		margin-top: 10px;
		font-size: 24px;
		filter: grayscale(1) brightness(1.5);
	}

	.bg-text {
		position: absolute;
		bottom: -10px;
		right: -10px;
		font-size: 60px;
		font-weight: 900;
		color: rgba(255, 255, 255, 0.03);
		user-select: none;
	}

	.card.one {
		background: linear-gradient(135deg, #111 0%, #222 100%);
		top: -130px;
		left: -180px;
		z-index: 1;
	}
	.card.two {
		background: linear-gradient(135deg, #1a1a1a 0%, #0d1b2a 100%);
		top: -90px;
		left: -130px;
		z-index: 2;
		animation-delay: 0.7s;
	}
	.card.three {
		background: linear-gradient(135deg, #1a1a1a 0%, #2d1b2d 100%);
		top: -50px;
		left: -80px;
		z-index: 3;
		animation-delay: 1.4s;
	}

	.card:hover {
		z-index: 10;
		transform: perspective(1000px) scale(1.1) rotateX(5deg) !important;
		border-color: #e8a21a;
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
		animation-play-state: paused;
	}

	.cardDetails {
		position: absolute;
		inset: 0;
		padding: 25px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: rgba(10, 10, 10, 0.95);
		backdrop-filter: blur(10px);
		transition: 0.5s transform ease;
		transform: translateY(101%);
		z-index: 5;
	}

	.card:hover .cardDetails {
		transform: translateY(0);
	}

	.cardDetailsHeader {
		font-size: 22px;
		font-weight: 800;
		color: #fff;
		border-bottom: 2px solid #e8a21a;
		padding-bottom: 5px;
		display: inline-block;
	}

	.cardDetailsButton {
		padding: 10px;
		border-radius: 8px;
		background: #e8a21a;
		color: #000;
		text-align: center;
		font-weight: 500;
		font-size: 14px;
		text-transform: uppercase;
		cursor: pointer;
	}

	.cardDetailsButton:hover {
		background-color: #cf9017;
	}

	@keyframes floatOne {
		0%,
		100% {
			transform: translateY(0) rotateZ(-6deg);
		}
		50% {
			transform: translateY(-15px) rotateZ(-4deg);
		}
	}
`

export default SubscriptionCards
