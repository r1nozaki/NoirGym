import { Counter } from '@/src/helpers/Counter'
import Button from '../../UI/Button'
import AboutMetricItem from './AboutMetricItem'
import Bar from '@/public/AboutSection.png'
import Image from 'next/image'

const AboutContent = () => {
	return (
		<div className='flex items-center gap-30'>
			<div className='flex flex-col w-1/2 gap-5 text-white/85'>
				<p className='mt-10 text-3xl'>
					<span className='text-[#e8a21a]'>NOIR GYM </span> — це сучасний
					фітнес-простір нового покоління, створений для тих, хто обирає силу,
					дисципліну та результат.
				</p>
				<p className='mb-5 text-xl'>
					Ми поєднуємо атмосферу характеру й мінімалізму з професійним
					обладнанням та продуманим тренувальним середовищем, де кожне заняття
					наближає до кращої версії себе.
				</p>
				<Button
					text='Більше про нас'
					link='/about-us'
				/>
				<div className='flex w-full border-2 border-[#e8a21a] mt-15'>
					<AboutMetricItem
						title='Загальна площа'
						metric='м2'
					>
						<Counter end={350} />
					</AboutMetricItem>
					<AboutMetricItem
						title='Задоволених клієнтів'
						metric='+'
					>
						<Counter end={10000} />
					</AboutMetricItem>
					<AboutMetricItem
						title='Одиниць обладнання'
						metric='+'
					>
						<Counter end={50} />
					</AboutMetricItem>
				</div>
			</div>
			<div className='w-1/2'>
				<Image
					src={Bar}
					alt='Bar in Noir Gym'
					width={400}
					height={400}
					className='object-cover w-full h-full'
				/>
			</div>
		</div>
	)
}

export default AboutContent
