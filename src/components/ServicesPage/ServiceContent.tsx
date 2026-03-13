import ServiceList from '../Homepage/ServicesSection/ServiceList'
import Title from '../UI/Title'
import ServicesSteps from './ServicesSteps'

const ServiceContent = () => {
	return (
		<section className='px-10 md:px-20 py-15 bg-[#121212] flex flex-col items-center overflow-hidden'>
			<Title
				mainText='Твій шлях у'
				secondText='Від першого кроку до видимого результату'
			/>
			<div className='w-full max-w-7xl mb-18'>
				<ServicesSteps />
			</div>
			<div className='w-full max-w-7xl'>
				<div className='mb-12'>
					<h2 className='text-3xl text-white uppercase font-bold tracking-tight'>
						Доступні напрямки
					</h2>
				</div>
				<ServiceList countServ={6} />
			</div>
			<div className='mt-40 w-full max-w-7xl text-center py-20 bg-[#1a1a1a] rounded-sm border border-white/5'>
				<h3 className='text-white text-3xl font-bold uppercase mb-8'>
					Готові змінити своє тіло?
				</h3>
				<button className='bg-[#e8a21a] text-black px-10 py-4 font-black uppercase cursor-pointer tracking-widest hover:bg-white transition-all duration-300 transform hover:-translate-y-1'>
					Записатися на тренування
				</button>
			</div>
		</section>
	)
}

export default ServiceContent
