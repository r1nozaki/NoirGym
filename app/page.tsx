import InstagramBanner from '@/src/components/common/InstagramBanner'
import AboutSection from '@/src/components/Homepage/AboutSection/AboutSection'
import IntroSection from '@/src/components/Homepage/IntroSection/IntroSection'
import ReviewsSection from '@/src/components/Homepage/ReviewsSection/ReviewsSection'
import ServicesSection from '@/src/components/Homepage/ServicesSection/ServicesSection'
import SubscriptionSection from '@/src/components/Homepage/SubscriptionSection/SubscriptionSection'

function HomePage() {
	return (
		<>
			<IntroSection />
			<SubscriptionSection />
			<AboutSection />
			<ServicesSection />
			<ReviewsSection />
			<InstagramBanner />
		</>
	)
}

export default HomePage
