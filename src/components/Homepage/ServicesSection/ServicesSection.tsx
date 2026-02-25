import ServiceList from './ServiceList'
import Title from '../../UI/Title'

const ServicesSection = () => {
	return (
		<section className='px-20 py-15 bg-[#1A1A1A]'>
			<Title title='Послуги' />
			<ServiceList />
		</section>
	)
}

export default ServicesSection
