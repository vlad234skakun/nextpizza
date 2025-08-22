export interface ICategories { 
	id: number;
	name: string;
	href: string
}

export const categories: ICategories[] = [
	{
		id: 1,
		name: 'Все',
		href: '/all'
	},
	{
		id: 2,
		name: 'Мясные',
		href: '/meat'
	},
	{
		id: 3,
		name: 'Острые',
		href: '/spicy'
	},
	{
		id: 4,
		name: 'Сладкие',
		href: '/sweet'
	},
	{
		id: 5,
		name: 'Вегетарианские',
		href: '/vegetarian'
	},
	{
		id: 6,
		name: 'С курицей',
		href: '/chicken'
	}

]
	