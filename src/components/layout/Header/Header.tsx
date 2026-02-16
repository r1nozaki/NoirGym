'use client'

import Logo from '../../common/Logo'
import HeaderJoinBtn from './HeaderJoinBtn'
import HeaderMenu from './HeaderMenu'
import { useState } from 'react'

const Header = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	return (
		<header className='fixed top-0 left-0 h-18 z-50 w-full bg-[#0f0f0d] px-12 py-4 flex justify-between items-center'>
			<div className='w-40'>
				<Logo />
			</div>
			<nav>
				<HeaderMenu />
			</nav>
			<div className='w-50'>
				<HeaderJoinBtn
					isOpenModal={isOpenModal}
					handleModel={() => setIsOpenModal(!isOpenModal)}
				/>
			</div>
		</header>
	)
}

export default Header
