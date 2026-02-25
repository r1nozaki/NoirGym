import { ServiceItem } from '../types/ServiceItem'
import {
	GroupPreview,
	HIITPreview,
	BoxPreview,
	StepPreview,
	TRXPreview,
	StretchPreview
} from '@/public/servicesPreview'

export const SERVICE_ITEMS: ServiceItem[] = [
	{
		id: 1,
		title: 'Групові тренування',
		preview: GroupPreview.src,
		summary:
			'Енергія команди та професійний супровід для досягнення спільних цілей.',
		link: '/services/groups'
	},
	{
		id: 2,
		title: 'HІІT',
		preview: HIITPreview.src,
		summary:
			'Високоінтенсивний інтервальний тренінг для максимального спалювання калорій.',
		link: '/services/hiit'
	},
	{
		id: 3,
		title: 'Бокс',
		preview: BoxPreview.src,
		summary: 'Розвиток витривалості, координації та сили духу в кожному ударі.',
		link: '/services/boxing'
	},
	{
		id: 4,
		title: 'TRX',
		preview: TRXPreview.src,
		summary:
			'Функціональний тренінг з власною вагою для зміцнення всього тіла.',
		link: '/services/trx'
	},
	{
		id: 5,
		title: 'Степ',
		preview: StepPreview.src,
		summary:
			'Активне кардіо-тренування з використанням платформ для ідеальних ніг.',
		link: '/services/step'
	},
	{
		id: 6,
		title: 'Стретчинг',
		preview: StretchPreview.src,
		summary: 'Гнучкість, зняття напруги та відновлення балансу вашого тіла.',
		link: '/services/stretching'
	}
]
