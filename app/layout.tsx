import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/src/components/layout/Header/Header'
import Footer from '@/src/components/layout/Footer/Footer'
import ScrollToTop from '@/src/helpers/ScrollToTop'

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
		<html lang='en'>
			<body className={`${roboto.variable}  antialiased`}>
				<ScrollToTop />
				<Header />
				<main className='min-h-screen bg-[#121214] pt-18'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
