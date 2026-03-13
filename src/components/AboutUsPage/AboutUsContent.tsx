import Image from 'next/image'
import Title from '../UI/Subtitle'
import aboutUs from '@/public/aboutUs.jpg'
import CoachList from './CoachList'

const AboutUsContent = () => {
	return (
		<div>
			<div className='mb-12 text-center lg:text-left'>
				<Title title='Простір' />
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-10'>
				<div className='order-2 lg:order-1 h-full shadow-2xl border border-[#e8a21a]/30 bg-black/60 backdrop-blur-sm p-8 rounded-2xl flex flex-col justify-center gap-6 text-white/90 hover:border-[#e8a21a] transition-all duration-300'>
					<div className='space-y-2'>
						<h3 className='text-2xl font-extrabold text-[#e8a21a] uppercase tracking-wide'>
							1 поверх
						</h3>
						<p className='font-medium italic text-white/70'>
							Сила та гнучкість
						</p>
					</div>

					<ul className='space-y-3 text-lg list-none'>
						{[
							'Тренажерна зала: кардіо, вільні ваги, силові тренажери',
							'Стретчинг рум',
							'Фітнес-бар'
						].map(item => (
							<li
								key={item}
								className='flex items-start'
							>
								<span className='text-[#e8a21a] mr-3'>▹</span> {item}
							</li>
						))}
					</ul>
				</div>
				<div className='order-1 lg:order-2 relative group h-100 lg:h-full w-full min-h-75'>
					<Image
						src={aboutUs}
						alt='Noir Gym Interior'
						fill
						sizes='(max-w-7xl) 100vw, 33vw'
						priority
						className='object-cover rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]'
					/>
					<div className='absolute inset-0 bg-linear-to from-black/50 to-transparent rounded-2xl' />
				</div>

				<div className='order-3 h-full shadow-2xl border border-[#e8a21a]/30 bg-black/60 backdrop-blur-sm p-8 rounded-2xl flex flex-col justify-center gap-6 text-white/90 hover:border-[#e8a21a] transition-all duration-300'>
					<div className='space-y-2'>
						<h3 className='text-2xl font-extrabold text-[#e8a21a] uppercase tracking-wide'>
							0 поверх
						</h3>
						<p className='font-medium italic text-white/70'>
							Енергія та комфорт
						</p>
					</div>

					<ul className='space-y-3 text-lg list-none'>
						{[
							'Студія боксу',
							'Студія групових класів',
							'Гардероб та роздягальні (ж/ч) з душовими'
						].map(item => (
							<li
								key={item}
								className='flex items-start'
							>
								<span className='text-[#e8a21a] mr-3'>▹</span> {item}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='mt-15'>
				<Title title='Наша команда' />
				<CoachList />
			</div>
		</div>
	)
}

export default AboutUsContent
