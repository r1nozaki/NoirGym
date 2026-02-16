import type { IconBaseProps } from 'react-icons'
import { FaInstagram, FaTiktok } from 'react-icons/fa'

type SocialItem = {
	id: number
	link: string
	icon: React.ComponentType<IconBaseProps>
}

const Socials = () => {
	const socials: SocialItem[] = [
		{
			id: 1,
			link: 'https://www.instagram.com/noir__gym/?hl=ua',
			icon: FaInstagram
		},
		{ id: 2, link: 'https://www.tiktok.com/@noir__gym', icon: FaTiktok }
	]
	return (
		<div className='flex justify-center gap-10'>
			{socials.map(({ link, icon: Icon }) => (
				<a
					key={link}
					href={link}
					target='_blank'
					rel='noreferrer'
					className='text-white transition-colors hover:text-[#e8a21a]'
				>
					<Icon size={22} />
				</a>
			))}
		</div>
	)
}

export default Socials
