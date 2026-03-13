import AboutUsContent from './AboutUsContent'
import Title from '../UI/Title'

const AboutUsSection = () => {
	return (
		<section className='px-20 py-15'>
			<Title
				mainText='ТВОЯ СИЛА В НАШИХ РУКАХ'
				secondText='КОМАНДА ЕКСПЕРТІВ, ЩО ВЕДУТЬ ДО ПЕРЕМОГИ НАД СОБОЮ'
			/>
			<AboutUsContent />
		</section>
	)
}

export default AboutUsSection
