import ServiceCard from './ServiceCard'
import { SERVICE_ITEMS } from '@/src/constants/services'

const ServiceList = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-5 items-center'>
			{SERVICE_ITEMS.slice(0, 3).map(service => (
				<ServiceCard
					key={service.id}
					id={service.id}
					title={service.title}
					preview={service.preview}
					summary={service.summary}
					link={service.link}
				/>
			))}
		</div>
	)
}

export default ServiceList
