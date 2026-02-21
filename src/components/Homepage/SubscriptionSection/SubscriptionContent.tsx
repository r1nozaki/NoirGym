import Button from '../../UI/Button'

const SubscriptionContent = () => {
	return (
		<div className='flex flex-col gap-5 py-10 pl-5'>
			<h3 className='text-2xl font-bold text-[#e8a21a]'>Абонементи</h3>
			<p className='text-5xl text-white/85 w-160'>
				Інвестуй у себе — результат починається сьогодні
			</p>
			<Button
				text='Дізнатись більше'
				link='subscription'
			/>
		</div>
	)
}

export default SubscriptionContent
