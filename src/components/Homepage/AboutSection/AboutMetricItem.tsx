import { ReactNode } from 'react'

type AboutMetricProps = {
	children: ReactNode
	title: string
	metric: string
}

const AboutMetricItem = ({ children, title, metric }: AboutMetricProps) => {
	return (
		<div className='flex flex-col p-5 justify-center  w-1/3 gap-2 '>
			<div className='flex items-center gap-1 text-2xl font-bold'>
				{children} <span className='text-[#e8a21a]'>{metric}</span>
			</div>
			<span className='text-white/80'>{title}</span>
		</div>
	)
}

export default AboutMetricItem
