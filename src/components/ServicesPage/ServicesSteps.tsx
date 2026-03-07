type Steps = {
	n: string
	t: string
	d: string
}

const ServicesSteps = () => {
	const steps: Steps[] = [
		{
			n: '01',
			t: 'Консультація',
			d: 'Зустріч з тренером для визначення ваших цілей та фізичного стану.'
		},
		{
			n: '02',
			t: 'Вибір послуги',
			d: 'Підбір оптимального напрямку тренувань з нашого списку нижче.'
		},
		{
			n: '03',
			t: 'Тренування',
			d: 'Початок роботи над собою під наглядом професіоналів Noir.'
		}
	]
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/5 pb-20'>
			{steps.map(s => (
				<div
					key={s.n}
					className='relative group'
				>
					<span className='text-[6rem] font-black text-white/3 absolute -top-12 -left-4 group-hover:text-[#e8a21a]/10 transition-colors duration-500'>
						{s.n}
					</span>
					<div className='relative z-10'>
						<h3 className='text-[#e8a21a] text-xl font-bold uppercase mb-3 tracking-widest'>
							{s.t}
						</h3>
						<p className='text-white/60 text-sm leading-relaxed max-w-xs'>
							{s.d}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default ServicesSteps
