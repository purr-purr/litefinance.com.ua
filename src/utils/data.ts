import { type INavigationList } from '@utils/types';

export const navigationList: INavigationList[] = [
	{ title: 'Про компанію', path: '#about', isActive: true },
	{ title: 'Фінансові послуги', path: '#fin-services', isActive: true },
	{ title: 'Звітність', path: '#reports', isActive: true },
	{ title: 'Захист прав споживачів', path: '#protection', isActive: true },
	{
		title: 'Повідомити про порушення',
		path: '#report-violation',
		isActive: true,
	},
	{ title: 'Контакти', path: '#contacts', isActive: true },
];
