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
				<ul className='text-lg font-medium text-white'>
					<li>{`Простір здоров'я та сили`}</li>
					<li>Сильне тіло = сильний характер</li>
					<li>Групові та персональні тренування</li>
					<li>Твоя ціль - наш план</li>
				</ul>
				<Button
					text='Приєднатись'
					className='w-71 h-12 text-white bg-[#e8a21a] border border-[#e8a21a] rounded-[40px] transition-all duration-300 hover:bg-transparent hover:scale-105 cursor-pointer'
				/>
			</div>
			<div className='w-1/2 mt-18 h-100'>
				<Image
					src={Intro}
					width={700}
					height={200}
					alt='Noir Gym'
					className='object-cover w-full h-full'
				/>
			</div>
		</section>
	)
}

export default IntroSection
