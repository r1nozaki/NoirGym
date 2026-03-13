import Title from '../UI/Title'
import ContactForm from './ContactForm'
import ContactsContent from './ContactsContent'

const ContactsSection = () => {
	return (
		<section className='px-20 py-15 flex flex-col items-center gap-5'>
			<Title
				mainText='Знайди свій'
				secondText='Ми чекаємо на тебе в самому серці міста'
			/>
			<div className='w-full flex flex-col items-center gap-10'>
				<ContactsContent />
				<ContactForm />
			</div>
		</section>
	)
}

export default ContactsSection
