import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, error, className = '', ...props }, ref) => {
		return (
			<div className='flex flex-col w-full gap-1.5'>
				{label && (
					<label className='text-[#e8a21a] text-xs uppercase tracking-widest font-medium ml-1'>
						{label}
					</label>
				)}

				<input
					ref={ref}
					{...props}
					className={`
            bg-zinc-900 
            text-white 
            p-3 
            border-b-2 
            border-zinc-800 
            outline-none 
            transition-all 
            duration-300
            placeholder:text-zinc-600
            focus:border-[#e8a21a] 
            focus:bg-zinc-800/50
            ${error ? 'border-red-500/50 focus:border-red-500' : ''}
            ${className}
          `}
				/>

				<div className='h-4'>
					{error && (
						<span className='text-red-500 text-[10px] uppercase font-bold tracking-tighter'>
							{error}
						</span>
					)}
				</div>
			</div>
		)
	}
)

Input.displayName = 'Input'

export default Input
