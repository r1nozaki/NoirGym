import type { Metadata } from 'next'
import { Roboto, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/src/components/layout/Header/Header'
import Footer from '@/src/components/layout/Footer/Footer'
import ScrollToTop from '@/src/helpers/ScrollToTop'
import ScrollProgress from '@/src/components/UI/ScrollProgress'
import ScrollToTopBtn from '@/src/components/UI/ScrollToTopBtn'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-roboto'
})

export const metadata: Metadata = {
	title: 'Noir Gym',
	description: 'Gym located in Izyaslav'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={cn('font-sans', inter.variable)}
		>
			<body className={`${roboto.variable}  antialiased`}>
				<ScrollToTop />
				<ScrollProgress />
				<Header />
				<main className='min-h-screen bg-[#121214] pt-18'>{children}</main>
				<ScrollToTopBtn />
				<Footer />
			</body>
		</html>
	)
}
