import Link from 'next/link'

const InstagramBanner = () => {
	return (
		<section className='px-20 py-15 flex justify-between text-white text-3xl font-medium items-center bg-[#1A1A1A]'>
			<span className='w-80'>Приєднуйся до нашої Insta-спільноти</span>
			<Link
				href={'https://www.instagram.com/noir__gym/?hl=ua'}
				target='_blank'
				className='border-b pb-3 transition-colors duration-200 hover:text-[#e8a21a]'
			>
				@noir__gym
			</Link>
		</section>
	)
}

export default InstagramBanner
