import * as z from 'zod'

export const reviewFormSchema = z.object({
	id: z.string().optional(),
	author: z
		.string()
		.trim()
		.min(2, "Ім'я та прізвище повинно складатися мінімум з 2 символів")
		.max(20, "Ім'я та прізвище занадто довге"),
	review: z
		.string()
		.min(15, 'Відгук повинно складатися мінімум з 15 символів')
		.max(200, 'Відгук занадто довге')
})

export type ReviewFormType = z.infer<typeof reviewFormSchema>
