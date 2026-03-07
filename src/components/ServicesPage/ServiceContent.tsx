import ServiceList from '../Homepage/ServicesSection/ServiceList'
import ServicesSteps from './ServicesSteps'

const ServiceContent = () => {
	return (
		<section className='px-10 md:px-20 py-15 bg-[#121212] flex flex-col items-center overflow-hidden'>
			<div className='flex flex-col items-center mb-24 text-center z-10'>
				<h1 className='text-5xl md:text-6xl text-white uppercase font-black mb-4 tracking-tighter'>
					Твій шлях у <span className='text-[#e8a21a]'>Noir Gym</span>
				</h1>
				<p className='text-white/50 font-medium text-lg uppercase tracking-[0.3em] max-w-xl'>
					Від першого кроку до видимого результату
				</p>
			</div>

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
