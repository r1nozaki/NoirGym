import SubscriptionCards from '../../UI/SubscriptionCards'
import Title from '../../UI/Title'
import SubscriptionContent from './SubscriptionContent'
const SubscriptionSection = () => {
	return (
		<section className='bg-[#1A1A1A] w-full py-15 mt-30 flex flex-col  '>
			<div className='px-20 pb-10'>
				<Title title='Абонементи' />
			</div>
			<div className='relative'>
				<SubscriptionContent />
				<SubscriptionCards />
			</div>
		</section>
	)
}

export default SubscriptionSection
