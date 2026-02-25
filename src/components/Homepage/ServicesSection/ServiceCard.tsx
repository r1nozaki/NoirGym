import type { ServiceItem } from '@/src/types/ServiceItem'
import Link from 'next/link'

const ServiceCard = ({ title, preview, summary, link }: ServiceItem) => {
	return (
		<div className='relative w-full aspect-square overflow-hidden group'>
			<div
				className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
				style={{ backgroundImage: `url(${preview})` }}
			/>

			<h4 className='relative z-30 bg-black/60 backdrop-blur-md w-fit py-2 px-6 rounded-br-xl text-white font-bold text-xl uppercase tracking-wider'>
				{title}
			</h4>

			<div className='absolute inset-0 z-20 bg-black/85 backdrop-blur-sm flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'>
				<div className='flex flex-col gap-4'>
					<p className='text-white text-base md:text-lg font-medium leading-relaxed'>
						{summary}
					</p>

					<Link
						href={link}
						className='w-fit px-8 py-2 border border-white rounded-full text-white text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-white hover:text-black'
					>
						Детальніше
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ServiceCard
