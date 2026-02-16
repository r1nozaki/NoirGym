export interface NavigationItem {
	path: string
	label: string
}

export const NAV_ITEMS: NavigationItem[] = [
	{ path: '/services', label: 'Послуги' },
	{ path: '/subscription', label: 'Абонемент' },
	{ path: '/about-us', label: 'Про нас' },
	{ path: '/news-shares', label: 'Новини та акції' },
	{ path: '/reviews', label: 'Відгуки' },
	{ path: '/contacts', label: 'Контакти' }
]
