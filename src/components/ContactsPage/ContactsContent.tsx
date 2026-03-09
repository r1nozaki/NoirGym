import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import ContactsMap from './ContactsMap'

const ContactsContent = () => {
	return (
		<div className='w-full max-w-7xl p-1 flex  overflow-hidden'>
			<ContactsMap />
			<div className='w-1/2 h-160 bg-[#e8a21a] p-12 flex flex-col justify-center text-black'>
				<div className='mb-10'>
					<div className='flex items-center gap-2 mb-3 opacity-80 uppercase tracking-wider text-sm font-bold'>
						<MapPin size={18} />
						<h3>Адреса NOIR GYM</h3>
					</div>
					<p className='text-3xl font-semibold leading-tight'>
						м. Ізяслав, <br /> вул. Подільська, 2
					</p>
					<a
						href='https://www.google.com/maps/dir//NOIR+GYM,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9F%D0%BE%D0%B4%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B0,+2,+%D0%86%D0%B7%D1%8F%D1%81%D0%BB%D0%B0%D0%B2,+%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+30301/@50.1206955,26.8148167,532m/data=!3m1!1e3!4m17!1m7!3m6!1s0x472e5df9bc0ad38f:0xa241e0805af161ae!2sNOIR+GYM!8m2!3d50.1206921!4d26.8173916!16s%2Fg%2F11y7t1r9g6!4m8!1m0!1m5!1m1!1s0x472e5df9bc0ad38f:0xa241e0805af161ae!2m2!1d26.8173916!2d50.1206921!3e2?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D'
						target='_blank'
						className='inline-flex items-center gap-2 mt-4 px-4 py-2 border border-black/20 rounded-full hover:bg-black hover:text-[#e8a21a] transition-colors text-sm font-medium'
					>
						<Navigation size={14} />
						Прокласти маршрут
					</a>
				</div>
				<div className='py-10 border-y border-black/20'>
					<div className='flex items-center gap-2 mb-3 opacity-80 uppercase tracking-wider text-sm font-bold'>
						<Phone size={18} />
						<h3>Телефон</h3>
					</div>
					<a
						href='tel:+380672715615'
						className='text-3xl font-semibold hover:underline decoration-2 underline-offset-4'
					>
						+380 (67) 271 56 15
					</a>
				</div>
				<div className='pt-10'>
					<div className='flex items-center gap-2 mb-4 opacity-80 uppercase tracking-wider text-sm font-bold'>
						<Clock size={18} />
						<h3>Графік роботи</h3>
					</div>
					<ul className='space-y-3 text-xl font-medium'>
						<li className='flex justify-between border-b border-black/10 pb-1'>
							<span>Пн–Пт</span>
							<span>08:00 – 21:00</span>
						</li>
						<li className='flex justify-between border-b border-black/10 pb-1'>
							<span>Субота</span>
							<span>11:00 – 20:00</span>
						</li>
						<li className='flex justify-between text-black/60'>
							<span>Неділя</span>
							<span className='uppercase text-sm font-bold tracking-widest'>
								Вихідний
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ContactsContent
