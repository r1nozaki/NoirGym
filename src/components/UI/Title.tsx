interface TitleProps {
	title: string
	className?: string
}

const Title = ({ title, className }: TitleProps) => {
	return (
		<h3
			className={`text-2xl font-bold text-[#e8a21a] pb-1 border-b border-b-[#e8a21a] mb-10 ${className}`}
		>
			{title}
		</h3>
	)
}

export default Title
