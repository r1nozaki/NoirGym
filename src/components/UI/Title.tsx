interface TitleProps {
	mainText: string
	secondText: string
}

const Title = ({ mainText, secondText }: TitleProps) => {
	return (
		<div className='flex flex-col items-center mb-24 text-center z-10'>
			<h1 className='text-5xl md:text-6xl text-white uppercase font-black mb-4 tracking-tighter'>
				{mainText} <span className='text-[#e8a21a]'>Noir Gym</span>
			</h1>
			<p className='text-white/50 font-medium text-lg uppercase tracking-[0.3em] max-w-xl'>
				{secondText}
			</p>
		</div>
	)
}

export default Title
