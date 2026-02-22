import Button from '../../UI/Button'

const SubscriptionContent = () => {
	return (
		<div className='flex flex-col gap-6 py-10 pl-20'>
			<p className='text-5xl text-white/85 w-160'>
				Інвестуй у себе — результат починається сьогодні
			</p>
			<Button
				text='Дізнатись більше'
				link='/subscription'
			/>
		</div>
	)
}

export default SubscriptionContent
