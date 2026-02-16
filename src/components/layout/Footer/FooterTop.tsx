import Link from 'next/link'
import Logo from '../../common/Logo'
import { NAV_ITEMS } from '@/src/constants/navigation'
import Socials from '../../common/Socials'

const FooterTop = () => {
	return (
		<div className='grid items-center grid-cols-2 py-16'>
			<div>
				<Logo isFooter={true} />
			</div>
			<div className='grid grid-cols-1 gap-5 md:grid-cols-4'>
				<div>
					<h2 className='mb-4 text-lg font-bold text-white'>Інформація</h2>
					<ul className='space-y-2'>
						{NAV_ITEMS.map(link => (
							<li key={link.path}>
								<Link
									href={link.path}
									className='text-white transition-colors duration-300 hover:text-[#e8a21a]'
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className='mb-4 text-lg font-bold text-white'>Адреса</h2>
					<span className='text-white'>м. Ізяслав, вул. Подільська, 2</span>
				</div>
				<div>
					<h2 className='mb-4 text-lg font-bold text-white'>Контакти</h2>
					<ul>
						<li className='text-white'>
							<a href='tel:+380672715615'>+380-67-271-56-15</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 className='mb-4 text-lg font-bold text-white'>
						Соціальні мережі
					</h2>
					<Socials />
				</div>
			</div>
		</div>
	)
}

export default FooterTop
