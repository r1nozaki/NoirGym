import { memo } from 'react'

const AreaLabel = memo(function AreaLabel() {
	return (
		<p className='text-[10px] uppercase font-bold text-[#e8a21a] tracking-widest text-center mb-4 opacity-70'>
			Напрями тренувань:
		</p>
	)
})

AreaLabel.displayName = 'AreaLabel'

export default AreaLabel
