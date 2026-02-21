import SubscriptionCards from '../../UI/SubscriptionCards'
import SubscriptionContent from './SubscriptionContent'
const SubscriptionSection = () => {
	return (
		<section className='bg-[#1A1A1A] w-full h-80 mt-20 flex relative '>
			<div>
				<SubscriptionContent />
				<SubscriptionCards />
			</div>
		</section>
	)
}

export default SubscriptionSection
