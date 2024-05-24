import { importDoc } from '@utils/formatters';
import type { IDocumentsList } from '@utils/types';

import ICON_ANALYTICS from '@public/assets/icon-analytics.svg';
import ICON_BUILDING from '@public/assets/icon-building.svg';
import ICON_MONEY from '@public/assets/icon-money.svg';
import ICON_SECURITY from '@public/assets/icon-security.svg';

export const lendingDocumentsList: IDocumentsList[] = [
	{
		title: 'Базові умови, ціна/тарифи',
		link: importDoc('4_Bazovi_umovy_KREDYT_-TOV_LAIT_FINANS.pdf'),
	},
];

export const advantagesList = [
	{
		icon: ICON_MONEY,
		desc:
			'Порушення провадження у справі про банкрутство,' +
			' застосування процедури санації фінансової установи - відсутні',
	},
	{ icon: ICON_BUILDING, desc: 'Товариство не має відокремлених підрозділів' },
	{
		icon: ICON_ANALYTICS,
		desc: 'Рішення про ліквідацію фінансової установи - не' + ' приймалось',
	},
	{ icon: ICON_SECURITY, desc: 'Наглядова рада товариства - відсутня' },
];
