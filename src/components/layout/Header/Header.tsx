'use client'

import Logo from '../../common/Logo'
import HeaderJoinBtn from './HeaderJoinBtn'
import HeaderMenu from './HeaderMenu'
import { useState, useEffect, useRef } from 'react'

const Header = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [show, setShow] = useState(true)
	const lastScrollY = useRef(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
				setShow(false)
			} else {
				setShow(true)
			}

			lastScrollY.current = currentScrollY
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<header
			className={`fixed top-0 left-0 h-18 z-40 w-full bg-[#0f0f0d] px-12 py-4 flex justify-between items-center transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}
		>
			<div className='w-40'>
				<Logo />
			</div>
			<nav>
				<HeaderMenu />
			</nav>
			<div className='w-40'>
				<HeaderJoinBtn
					isOpenModal={isOpenModal}
					handleModel={() => setIsOpenModal(!isOpenModal)}
				/>
			</div>
		</header>
	)
}

export default Header
