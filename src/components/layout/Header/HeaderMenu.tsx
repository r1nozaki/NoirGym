'use client'

import Link from 'next/link'
import { NAV_ITEMS } from '@/src/constants/navigation'
import { usePathname } from 'next/navigation'

const HeaderMenu = () => {
	const pathname = usePathname()

	return (
		<ul className='flex items-center justify-center gap-10'>
			{NAV_ITEMS.map(({ path, label }) => (
				<li key={path}>
					<Link
						href={path}
						className={`text-base  font-medium transition-colors duration-300   ${pathname === path ? 'text-[#e8a21a]' : 'hover:text-[#e8a21a] text-white'}`}
					>
						{label}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default HeaderMenu
