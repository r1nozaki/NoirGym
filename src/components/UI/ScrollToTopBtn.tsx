'use client'

import { lenis } from '@/src/lenisInstance'
import { MoveUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const ScrollToTopBtn = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 300)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		lenis?.scrollTo(0)
	}

	if (!visible) return null

	return (
		<button
			type='button'
			onClick={scrollToTop}
			className='flex justify-center items-center fixed bottom-5 right-0 md:bottom-10 md:right-3 h-5 w-5 md:h-10 md:w-10 rounded-full shadow-md bg-[#e8a21a] border border-[#e8a21a] transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-white'
			aria-label='Scroll to top'
		>
			<MoveUp size={18} />
		</button>
	)
}

export default ScrollToTopBtn
