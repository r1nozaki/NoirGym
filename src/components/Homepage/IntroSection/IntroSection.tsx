import Image from 'next/image'
import Intro from '@/public/introGym.jpg'
import Button from '../../UI/Button'

const IntroSection = () => {
	return (
		<section className='flex justify-between w-full px-20 pt-10'>
			<div className='flex flex-col items-start gap-4'>
				<h1 className='text-4xl text-[#e8a21a] uppercase font-bold'>
					Будуй тіло разом з NOIR GYM
				</h1>
				<ul className='text-lg font-medium text-white/85'>
					<li>{`Простір здоров'я та сили`}</li>
					<li>Сильне тіло = сильний характер</li>
					<li>Групові та персональні тренування</li>
					<li>Твоя ціль - наш план</li>
				</ul>
				<Button text='Приєднатись' />
			</div>
			<div className='w-1/2 mt-18 h-100'>
				<Image
					src={Intro}
					width={700}
					height={200}
					priority
					alt='Noir Gym'
					className='object-cover w-full h-full'
				/>
			</div>
		</section>
	)
}

export default IntroSection
