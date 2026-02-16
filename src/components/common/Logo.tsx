import Link from 'next/link'

const Logo = ({ isFooter }: { isFooter?: boolean }) => {
	return (
		<Link
			href={'/'}
			className={`flex flex-col  font-semibold leading-6 text-white uppercase transition-opacity duration-300 hover:opacity-75 ${isFooter ? 'text-5xl' : 'text-xl'}`}
		>
			<span>Noir Gym</span>
		</Link>
	)
}

export default Logo
