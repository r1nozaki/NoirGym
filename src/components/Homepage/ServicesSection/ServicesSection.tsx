import ServiceList from './ServiceList'
import Title from '../../UI/Title'
import Button from '../../UI/Button'

const ServicesSection = () => {
	return (
		<section className='px-20 py-15 bg-[#1A1A1A]'>
			<Title title='Послуги' />
			<ServiceList />
			<Button
				className='mt-10 w-full font-bold'
				text='Більше послуг'
				link='/services'
			/>
		</section>
	)
}

export default ServicesSection
