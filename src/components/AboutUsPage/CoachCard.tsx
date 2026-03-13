import Image from 'next/image'
import { type CoachesItem } from '@/src/types/CoachesItem'
import AreaLabel from './AreaLabel'

interface CoachCardProps {
	coach: CoachesItem
}

const CoachCard = ({ coach }: CoachCardProps) => {
	return (
		<div className='group relative flex flex-col items-center p-6 w-full h-full transition-all duration-500 hover:scale-[1.03] rounded-3xl overflow-hidden hover:bg-[#e8a21a]/5'>
			<div className='absolute -top-10 -right-10 w-48 h-48 bg-[#e8a21a]/15 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none' />
			<div className='relative w-48 h-48 mb-6 overflow-hidden rounded-full border-2 border-[#e8a21a]/10 group-hover:border-[#e8a21a] transition-all duration-500 shadow-xl shrink-0'>
				<Image
					src={coach.ava}
					alt={coach.name}
					fill
					sizes='192px'
					className='object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700'
				/>
			</div>
			<div className='text-center z-10 w-full mb-8'>
				<h4 className='text-2xl font-black text-white uppercase tracking-tighter mb-1.5 group-hover:text-[#e8a21a] transition-colors duration-300'>
					{coach.name}
				</h4>
			</div>
			<div className='z-10 w-full grow flex flex-col items-center'>
				<AreaLabel />
				<div className='flex flex-wrap justify-center gap-1.5'>
					{coach.areas.map((area, index) => (
						<span
							key={index}
							className='text-[10px] uppercase font-medium tracking-widest text-white/50 border border-white/5 px-2.5 py-1 rounded-sm bg-white/5 group-hover:border-[#e8a21a]/20 group-hover:text-white/80 transition-all'
						>
							{area}
						</span>
					))}
				</div>
			</div>
			<div className='w-12 h-px bg-[#e8a21a]/10 mt-8 group-hover:w-24 group-hover:bg-[#e8a21a] transition-all duration-500 shrink-0' />
		</div>
	)
}

export default CoachCard
