export interface NavigationItem {
	path: string
	label: string
}

export const NAV_ITEMS: NavigationItem[] = [
	{ path: '/services', label: 'Послуги' },
	{ path: '/subscription', label: 'Абонементи' },
	{ path: '/about-us', label: 'Про нас' },
	{ path: '/reviews', label: 'Відгуки' },
	{ path: '/contacts', label: 'Контакти' }
]
