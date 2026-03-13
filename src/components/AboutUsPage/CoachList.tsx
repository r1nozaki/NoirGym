import CoachCard from './CoachCard'
import { COACHES } from '@/src/constants/coaches'

const CoachList = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
			{COACHES.map(coach => (
				<CoachCard
					key={coach.id}
					coach={coach}
				/>
			))}
		</div>
	)
}

export default CoachList
