import AboutSection from '@/src/components/Homepage/AboutSection/AboutSection'
import IntroSection from '@/src/components/Homepage/IntroSection/IntroSection'
import SubscriptionSection from '@/src/components/Homepage/SubscriptionSection/SubscriptionSection'

function HomePage() {
	return (
		<>
			<IntroSection />
			<SubscriptionSection />
			<AboutSection />
		</>
	)
}

export default HomePage
