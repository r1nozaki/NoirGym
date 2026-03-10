import * as z from 'zod'

export const contactFormSchema = z.object({
	firstName: z
		.string()
		.trim()
		.min(2, "Ім'я повинно складатися мінімум з 2 символів")
		.max(50, "Ім'я занадто довге"),
	lastName: z
		.string()
		.trim()
		.min(2, 'Прізвище повинно складатися мінімум з 2 символів')
		.max(50, 'Прізвище занадто довге'),
	email: z.email(),
	message: z
		.string()
		.trim()
		.min(15, 'Повідомлення повинно складатися мінімум з 15 символів')
		.max(150, 'Повідомлення занадто довге'),
	privacyPolicy: z.literal(true, {
		error: () => ({
			message: 'Ви повинні погодитися з політикою конфіденційності'
		})
	})
})

export type ContactFormType = z.infer<typeof contactFormSchema>
