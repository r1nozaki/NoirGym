'use client'

import { useForm, type SubmitHandler } from 'react-hook-form'
import {
	contactFormSchema,
	type ContactFormType
} from '../validators/contact-form.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../UI/Input'
import { cn } from '@/lib/utils'

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useForm<ContactFormType>({
		resolver: zodResolver(contactFormSchema),
		mode: 'onBlur'
	})

	const onSubmit: SubmitHandler<ContactFormType> = data => {
		console.log('Дані для Noir Gym:', data)
		reset()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full z-10 space-y-6'
		>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<Input
					label="Ім'я"
					placeholder="Введіть ім'я"
					error={errors.firstName?.message}
					{...register('firstName')}
				/>
				<Input
					label='Прізвище'
					placeholder='Введіть прізвище'
					error={errors.lastName?.message}
					{...register('lastName')}
				/>
			</div>

			<Input
				label='Електронна адреса'
				placeholder='Введіть електронну адресу'
				error={errors.email?.message}
				{...register('email')}
			/>
			<div className='flex flex-col gap-1.5'>
				<label className='text-[#e8a21a] text-[10px] uppercase tracking-[0.2em] font-bold ml-1'>
					Message
				</label>
				<textarea
					{...register('message')}
					placeholder='Як ми можемо вам допомогти?'
					className={cn(
						'bg-zinc-900 text-white p-4 border-b-2 border-zinc-800 outline-none transition-all duration-300 min-h-37.5 resize-none',
						'focus:border-[#e8a21a] focus:bg-zinc-800/50 placeholder:text-zinc-600',
						{
							'border-red-500/50': errors.message,
							'focus:border-red-500': errors.message
						}
					)}
				/>
				{errors.message && (
					<span className='text-red-500 text-[10px] uppercase mt-1'>
						{errors.message.message}
					</span>
				)}
			</div>
			<div className='flex flex-col gap-2'>
				<label className='flex items-center gap-3 cursor-pointer group'>
					<input
						type='checkbox'
						{...register('privacyPolicy')}
						className='w-5 h-5 accent-[#e8a21a] bg-zinc-900 border-zinc-800 rounded cursor-pointer'
					/>
					<span className='text-zinc-500 text-xs group-hover:text-zinc-300 transition-colors'>
						Я погоджуюся з політикою конфіденційності та умовами надання послуг.
					</span>
				</label>
				{errors.privacyPolicy && (
					<span className='text-red-500 text-[10px] uppercase'>
						{errors.privacyPolicy.message}
					</span>
				)}
			</div>
			<button
				type='submit'
				disabled={isSubmitting}
				className='w-full bg-[#e8a21a] text-black font-black py-5 uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 disabled:opacity-50'
			>
				{isSubmitting ? 'Відправка...' : 'Відправити'}
			</button>
		</form>
	)
}

export default ContactForm
