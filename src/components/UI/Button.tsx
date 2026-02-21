'use client'

import type { ButtonHTMLAttributes } from 'react'
import { useRouter } from 'next/navigation'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
	link?: string
	className?: string
}

const Button = ({
	text,
	link,
	className = '',
	onClick,
	...rest
}: ButtonProps) => {
	const router = useRouter()

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (link) {
			router.push(link)
			return
		}

		onClick?.(event)
	}

	return (
		<button
			type='button'
			className={`w-71 h-12 text-white bg-[#e8a21a] border border-[#e8a21a] rounded-[40px] transition-all duration-300 hover:bg-transparent hover:scale-105 cursor-pointer ${className}`}
			onClick={handleClick}
			{...rest}
		>
			{text}
		</button>
	)
}

export default Button
