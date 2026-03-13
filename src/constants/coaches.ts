import { type CoachesItem } from '../types/CoachesItem'
import { anastasia, myroslav, bogdan } from '@/public/coaches'

export const COACHES: CoachesItem[] = [
	{
		id: '1',
		name: 'Богдан Романюк',
		areas: [
			'Силові тренування',
			'Функціональні тренування',
			'МФР',
			'Тренування з боксу',
			'Загальна фізична підготовка'
		],
		ava: bogdan.src
	},
	{
		id: '2',
		name: 'Анастасія Свідерська',
		areas: ['Стретчинг', 'Степ-аеробіка', 'Силові тренування', 'TRX'],
		ava: anastasia.src
	},
	{
		id: '3',
		name: 'Мирослав Миколаєнко',
		areas: ['Силові тренування', 'Функціональні тренування', 'TRX', 'МФР'],
		ava: myroslav.src
	}
]
