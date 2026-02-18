import Image from 'next/image'
import Intro from '@/public/introGym.jpg'

const IntroSection = () => {
	return (
		<section className='w-full px-20 pt-10 flex justify-between'>
			<div className='flex flex-col items-start gap-4'>
				<h1 className='text-4xl text-[#e8a21a] uppercase font-bold'>
					Будуй тіло разом з NOIR GYM
				</h1>
				<ul className='text-white font-medium text-lg'>
					<li>{`Простір здоров'я та сили`}</li>
					<li>Сильне тіло = сильний характер</li>
					<li>Групові та персональні тренування</li>
					<li>Твоя ціль - наш план</li>
				</ul>
				<button className='w-71 h-12 text-white bg-[#e8a21a] border border-[#e8a21a] rounded-[40px] transition-all duration-300 hover:bg-transparent hover:scale-105 cursor-pointer'>
					Приєднатись
				</button>
			</div>
			<div className='mt-18 w-1/2 h-100'>
				<Image
					src={Intro}
					width={700}
					height={200}
					alt='Noir Gym'
					className='w-full h-full object-cover'
				/>
			</div>
		</section>
	)
}

export default IntroSection
