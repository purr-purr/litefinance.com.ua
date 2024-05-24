import { importDoc } from '@utils/formatters';
import { IDocumentsListGroup, type IDocumentsList } from '@utils/types';

export const innerRules: IDocumentsList[] = [
	{
		title: 'Кредити, чинні з 11.04.2024',
		link: importDoc('3_PRAVYLA_koshtiv_ta_bank_met_kredyt_TOV_LAIT-_FINANS.pdf'),
	},
	{
		title: 'Фінансовий лізинг, чинні з 11.04.2024',
		link: importDoc('2_PRAVYLA_fin_lizynhu_TOV_LAIT_FINANS.pdf'),
	},
	{
		title: 'Факторинг, чинні з 11.04.2024',
		link: importDoc('1_PRAVYLA_faktorynhu_TOV_LAIT_FINANS.pdf'),
	},
];

export const infoFinancialInstitution: IDocumentsList[] = [
	{
		title: 'Свідоцтво про реєстрацію фінансової установи',
		link: importDoc('svid-reestr.pdf'),
	},
	{
		title: 'Витяг з Державного реєстру фінансових установ',
		link: importDoc('8_TOV_LAIT_FINANS_vytyag.pdf'),
	},
	{
		title: 'Розпорядження про видачу ліцензій',
		link: importDoc('rozp-lic.pdf'),
	},
	{
		title: 'Порядок обробки і захисту персональних даних в ТОВ«ЛАЙТ ФІНАНС»',
		link: importDoc(
			'1.Poriadok_obrobky_i_zakhystu_pers_danykh_TOV_LAIT_FINANS.pdf',
		),
	},
	{
		title: 'Публічна інформація про ТОВ «ЛАЙТ ФІНАНС»',
		link: importDoc('9_Publichna_informatsiia_pro_kompaniiu_TOV_LAIT_FINANS.pdf'),
	},
	{
		title:
			'Інформація щодо ТОВ «ЛАЙТ ФІНАНС», умов та порядку діяльності, включно щодо фінансових послуг, які надаються ТОВ «ЛАЙТ ФІНАНС» клієнту',
		link: importDoc(
			'10_Informatsiia_shchodo_umov_ta_poriadku_diialnosti_TOV_LAIT_FINANS.pdf',
		),
	},
];

export const infoOwnershipStructure: IDocumentsListGroup[] = [
	{
		groupTitle: '2024',
		list: [
			{
				title:
					'Схематичне зображення структури власності ТОВ "ЛАЙТ ФІНАНС" станом на 01.01.2024',
				link: importDoc('5_Struktura_vlasnosti_TOV_LAIT_FINANS_na_01.01.2024.pdf'),
			},
			{
				title:
					'Відомості про остаточних ключових учасників у структурі власності надавача фінансових послуг ТОВ "ЛАЙТ ФІНАНС" станом на 01.01.2024',
				link: importDoc(
					'6_Vidomosti-_pro_ostat_kliuch_uchasnykiv_TOV_LAIT_FINANS_na_01.01.2024.pdf',
				),
			},
			{
				title:
					'Відомості про власників істотної участі в надавачі фінансових послуг ТОВ "ЛАЙТ ФІНАНС" станом на 01.01.2024',
				link: importDoc(
					'7_Vidomosti_pro_vlasnykiv_istotn-uchasti_TOV_LAIT_FINANS_na_01.01.2024.pdf',
				),
			},
		],
	},
	{
		groupTitle: '2023',
		list: [
			{
				title:
					'Схематичне зображення структури власності ТОВ "ЛАЙТ ФІНАНС" станом на 01.01.2023',
				link: importDoc('1_Struktura-vlasnosti-TOV-LAIT-FINANS-na-01.01.2023.pdf'),
			},
			{
				title:
					'Відомості про остаточних ключових учасників у структурі власності надавача фінансових послуг ТОВ "ЛАЙТ ФІНАНС" станом на 01.01.2023',
				link: importDoc(
					'2_Vidomosti-pro-ostatochnykh-kliuchovykh-uchasnykiv-TOV-LAIT-FINANS-na-01.01.2023-dod.2.pdf',
				),
			},
			{
				title:
					'Відомості про власників істотної участі в надавачі фінансових послуг ТОВ "ЛАЙТ ФІНАНС" станом на 01.01.2023',
				link: importDoc(
					'3_Vidomosti-pro-vlasnykiv-istotnoi-uchasti-TOV-LAIT-FINANS-na-01.01.2023-dod.3.pdf',
				),
			},
		],
	},
	{
		groupTitle: '2022',
		list: [
			{
				title:
					'Схематичне зображення структури власності ТОВ "ЛАЙТ ФІНАНС" станом на 14.12.2022',
				link: importDoc('1_Struktura-vlasnosti-TOV-LAIT-FINANS-na-14.12.2022.pdf'),
			},
			{
				title:
					'Відомості про остаточних ключових учасників у структурі власності надавача фінансових послуг ТОВ "ЛАЙТ ФІНАНС" станом на 14.12.2022',
				link: importDoc(
					'2_Vidomosti-pro-ostatochnykh-kliuchovykh-uchasnykiv-TOV-LAIT-FINANS-na-14122022-dod.2.pdf',
				),
			},
			{
				title:
					'Відомості про власників істотної участі в надавачі фінансових послуг ТОВ "ЛАЙТ ФІНАНС" станом на 14.12.2022',
				link: importDoc(
					'3_Vidomosti-pro-vlasnykiv-istotnoi-uchasti-TOV-LAIT-FINANS-na-14122022-dod.3.pdf',
				),
			},
			{
				title:
					'Схематичне зображення структури власності ТОВ "ЛАЙТ ФІНАНС" станом на 07.11.2022',
				link: importDoc('1_Struktura-vlasnosti-TOV-LAIT-FINANS-na-07112022.pdf'),
			},
			{
				title:
					'Відомості про остаточних ключових учасників у структурі власності надавача фінансових послуг ТОВ "ЛАЙТ ФІНАНС" станом на 07.11.2022',
				link: importDoc(
					'2_Vidomosti-pro-ostatochnykh-kliuchovykh-uchasnykiv-TOV-LAIT-FINANS-na-07112022-dod.2.pdf',
				),
			},
			{
				title:
					'Відомості про власників істотної участі в надавачі фінансових послуг ТОВ "ЛАЙТ ФІНАНС" станом на 07.11.2022',
				link: importDoc(
					'3_Vidomosti-pro-vlasnykiv-istotnoi-uchasti-TOV-LAIT-FINANS-na-07112022-dod.3.pdf',
				),
			},
			{
				title:
					'Схематичне зображення структури власності ТОВ "ЛАЙТ ФІНАНС" станом на 01.01.2022',
				link: importDoc('1_Struktura-vlasnosti-TOV-LAIT-FINANS-na-01012022.pdf'),
			},
			{
				title:
					'Відомості про остаточних ключових учасників у структурі власності надавача фінансових послуг ТОВ "ЛАЙТ ФІНАНС" станом на 01.01.2022',
				link: importDoc(
					'2_Vidomosti-pro-ostatochnykh-kliuchovykh-uchasnykiv-TOV-LAIT-FINANS-na-01012022-dod.2.pdf',
				),
			},
			{
				title:
					'Відомості про власників істотної участі в надавачі фінансових послуг ТОВ "ЛАЙТ ФІНАНС" станом на 01.01.2022',
				link: importDoc(
					'3_Vidomosti-pro-vlasnykiv-istotnoi-uchasti-TOV-LAIT-FINANS-na-01012022-dod.3.pdf',
				),
			},
		],
	},
	{
		groupTitle: '2021',
		list: [
			{
				title:
					'Схематичне зображення структури власності ТОВ "ЛАЙТ ФІНАНС" станом на 28.10.2021',
				link: importDoc('1_Struktura-vlasnosti-TOV-LAIT-FINANS-na-28102021.pdf'),
			},
			{
				title:
					'Відомості про остаточних ключових учасників у структурі власності надавача фінансових послуг ТОВ "ЛАЙТ ФІНАНС" станом на 28.10.2021',
				link: importDoc(
					'2_Vidomosti-pro-ostatochnykh-kliuchovykh-uchasnykiv-TOV-LAIT-FINANS-na-28102021-dod.2.pdf',
				),
			},
			{
				title:
					'Відомості про власників істотної участі в надавачі фінансових послуг ТОВ "ЛАЙТ ФІНАНС" станом на 28.10.2021',
				link: importDoc(
					'3_Vidomosti-pro-vlasnykiv-istotnoi-uchasti-TOV-LAIT-FINANS-na-28102021-dod.3.pdf',
				),
			},
		],
	},
];

export const financeReports: IDocumentsListGroup[] = [
	{
		groupTitle: '2023',
		list: [
			{
				title: 'Баланс (Звіт про фінансовий стан) на 31 березня 2023 р.',
				link: importDoc('balans-1kvartal-2023.pdf'),
			},
			{
				title: 'Звіт про фінансові результати (в тисячах) за 1 квартал 2023 р.',
				link: importDoc('f2-1kvartal-2023.pdf'),
			},
			{
				title:
					'Звіт про рух грошових коштів (за прямим методом) за 1 квартал 2023 р.',
				link: importDoc('f3-1kvartal-2023.pdf'),
			},
			{
				title: 'Звіт про власний капітал за 1 квартал 2023 р.',
				link: importDoc('f4-1kvartal-2023.pdf'),
			},
			{
				title: 'Примітки до фінансової звітності за 1 квартал 2023 р.',
				link: importDoc('prymitky-1kvartal-2023.pdf'),
			},
			{
				title: 'Баланс (Звіт про фінансовий стан) на 30 червня 2023 р.',
				link: importDoc('balans-1pivrich-2023.pdf'),
			},
			{
				title: 'Звіт про фінансові результати (в тисячах) за 1 півріччя 2023 р.',
				link: importDoc('f2-1pivrich-2023.pdf'),
			},
			{
				title:
					'Звіт про рух грошових коштів (за прямим методом) за 1 півріччя 2023 р.',
				link: importDoc('f3-1pivrich-2023.pdf'),
			},
			{
				title: 'Звіт про власний капітал за 1 півріччя 2023 р.',
				link: importDoc('f4-1pivrich-2023.pdf'),
			},
			{
				title: 'Примітки до фінансової звітності за 1 півріччя 2023 р.',
				link: importDoc('prymitky-1pivrich-2023.pdf'),
			},
			{
				title: 'Баланс (Звіт про фінансовий стан) на 30 вересня 2023 р.',
				link: importDoc('balans-9mis-2023.pdf'),
			},
			{
				title: 'Звіт про фінансові результати (в тисячах) за 9 місяців 2023 р.',
				link: importDoc('f2-9mis-2023.pdf'),
			},
			{
				title:
					'Звіт про рух грошових коштів (за прямим методом) за 9 місяців 2023 р.',
				link: importDoc('f3-9mis-2023.pdf'),
			},
			{
				title: 'Звіт про власний капітал за 9 місяців 2023 р.',
				link: importDoc('f4-9mis-2023.pdf'),
			},
			{
				title: 'Примітки до фінансової звітності за 9 місяців 2023 р.',
				link: importDoc('prymitky-9mis-2023.pdf'),
			},
			{
				title: 'Баланс (Звіт про фінансовий стан) на 31 грудня 2023 р.',
				link: importDoc('balans-2023.pdf'),
			},
			{
				title: 'Звіт про фінансові результати (в тисячах) за 2023 р.',
				link: importDoc('f2-2023.pdf'),
			},
			{
				title: 'Звіт про рух грошових коштів (за прямим методом) за 2023 р.',
				link: importDoc('f3-2023.pdf'),
			},
			{
				title: 'Звіт про власний капітал за 2023 р.',
				link: importDoc('f4-2023.pdf'),
			},
			{
				title: 'Примітки до фінансової звітності за 2023 р.',
				link: importDoc('prymitky-2023.pdf'),
			},
		],
	},
	{
		groupTitle: '2022',
		list: [
			{
				title: 'Баланс (Звіт про фінансовий стан) на 31 грудня 2022 р.',
				link: importDoc('balans2022.pdf'),
			},
			{
				title: 'Звіт про фінансові результати (в тисячах) за 2022 рік',
				link: importDoc('f2-2022.pdf'),
			},
			{
				title: 'Звіт про рух грошових коштів (за прямим методом) за 2022 рік',
				link: importDoc('f3-2022.pdf'),
			},
			{
				title: 'Звіт про власний капітал за 2022 рік',
				link: importDoc('f4-2022.pdf'),
			},
			{
				title: 'Примітки до фінансової звітності за 2022 рік',
				link: importDoc('prymitky-2022.pdf'),
			},
		],
	},
	{
		groupTitle: '2021',
		list: [
			{
				title: 'Баланс (Звіт про фінансовий стан) на 31 грудня 2021 р.',
				link: importDoc('f1balans.pdf'),
			},
			{
				title: 'Звіт про фінансові результати (в тисячах) за 2021 рік',
				link: importDoc('f2finrez.pdf'),
			},
			{
				title: 'Звіт про рух грошових коштів (за прямим методом) за 2021 рік',
				link: importDoc('f3ruhgroshkostiv.pdf'),
			},
			{
				title: 'Звіт про власний капітал за 2021 рік',
				link: importDoc('f4vlasnkapital.pdf'),
			},
			{
				title: 'Примітки до фінансової звітності за 2021 рік',
				link: importDoc('prym2021.pdf'),
			},
		],
	},
	{
		groupTitle: '2020',
		list: [
			{
				title: 'Баланс (Звіт про фінансовий стан) на 31 грудня 2020 р.',
				link: importDoc('balans2020.xls'),
			},
			{
				title: 'Звіт про фінансові результати (в тисячах) за 2020 рік',
				link: importDoc('zvit-fin-rez2020.xls'),
			},
			{
				title: 'Звіт про рух грошових коштів (за прямим методом) за 2020 рік',
				link: importDoc('zvit-ruh-grosh-kosht2020.xls'),
			},
			{
				title: 'Звіт про власний капітал за 2020 рік',
				link: importDoc('zvit-ruh-grosh-kosht2020.xls'),
			},
			{
				title: 'Примітки до фінансової звітності за 2020 рік',
				link: importDoc('prym2020.doc'),
			},
		],
	},
];

export const archivedInformation: IDocumentsList[] = [
	{
		title:
			'Правила надання коштів у позику, в тому числі і на умовах фінансового кредиту - Редакція, яка діяла до 14.06.2023 включно',
		link: importDoc('rules-credits-16082021.pdf'),
	},
	{
		title:
			'Правила надання коштів у позику, в тому числі і на умовах фінансового кредиту - Редакція, яка діяла до 10.04.2024 включно',
		link: importDoc('Rules_credits_lite-finance.pdf'),
	},
	{
		title:
			'Правила надання послуг з фінансового лізингу - Редакція, яка діяла до 10.04.2024 включно',
		link: importDoc('pravyla_lizyngLF.pdf'),
	},
	{
		title:
			'Правила надання фінансових послуг з факторингу - Редакція, яка діяла до 10.04.2024 включно',
		link: importDoc('pravyla_faktoryngLF.pdf'),
	},
];

export const auditReports: IDocumentsList[] = [
	{
		title: 'Звіт незалежного аудитора щодо фінансової звітності за 2020 рік',
		link: importDoc('zvit-audit2020.pdf'),
	},
	{
		title:
			'Незалежний звіт з надання впевненості щодо річних звітних даних за 2020 рік',
		link: importDoc('zvit-vpevn2020.pdf'),
	},
	{
		title: 'Звіт незалежного аудитора щодо фінансової звітності за 2021 рік',
		link: importDoc('zvit-audit2021.pdf'),
	},
	{
		title:
			'Незалежний звіт з надання впевненості щодо річних звітних даних за 2021 рік',
		link: importDoc('zvit-vpevn2021.pdf'),
	},
	{
		title: 'Звіт незалежного аудитора щодо фінансової звітності за 2022 рік',
		link: importDoc('zvit-audit2022.pdf'),
	},
	{
		title:
			'Незалежний звіт з надання впевненості щодо річних звітних даних за 2022 рік',
		link: importDoc('zvit-vpevn2022.pdf'),
	},
];

export const news: IDocumentsList[] = [
	{
		title:
			'ПОРЯДОК проведення конкурсу з відбору суб’єктів аудиторської діяльності для надання послуг обов’язкового аудиту фінансової звітності ТОВ «ЛАЙТ ФІНАНС»',
		link: importDoc('1poryadok-proved-konkursu-audit.pdf'),
	},
	{
		title:
			"Оголошення про проведення конкурсу з відбору суб'єкта аудиторської діяльності_ТОВ «ЛАЙТ ФІНАНС» від 05.01.2022",
		link: importDoc('2ogoloshennia-pro-proved-konkursu-audit.pdf'),
	},
	{
		title:
			"Продовження конкурсу з відбору суб'єкта аудиторської діяльності_ТОВ «ЛАЙТ ФІНАНС» від 22.01.2022",
		link: importDoc('3prodovzhennia-konkursu-audit.pdf'),
	},
	{
		title:
			"Продовження конкурсу з відбору суб'єкта аудиторської діяльності_ТОВ «ЛАЙТ ФІНАНС» від 22.02.2022",
		link: importDoc('4prodovzhennia-konkursu-audit.pdf'),
	},
	{
		title:
			"Продовження конкурсу з відбору суб'єкта аудиторської діяльності_ТОВ «ЛАЙТ ФІНАНС» від 22.03.2022",
		link: importDoc('5prodovzhennia-konkursu-audit.pdf'),
	},
	{
		title:
			"Продовження конкурсу з відбору суб'єкта аудиторської діяльності_ТОВ «ЛАЙТ ФІНАНС» від 22.04.2022",
		link: importDoc('6prodovzhennia-konkursu-audit.pdf'),
	},
	{
		title:
			"Продовження конкурсу з відбору суб'єкта аудиторської діяльності_ТОВ «ЛАЙТ ФІНАНС» від 22.05.2022",
		link: importDoc('7prodovzhennia-konkursu-audit.pdf'),
	},
	{
		title:
			"Продовження конкурсу з відбору суб'єкта аудиторської діяльності_ТОВ «ЛАЙТ ФІНАНС» від 22.06.2022",
		link: importDoc('8prodovzhennia-konkursu-audit.pdf'),
	},
	{
		title:
			"Продовження конкурсу з відбору суб'єкта аудиторської діяльності_ТОВ «ЛАЙТ ФІНАНС» від 22.07.2022",
		link: importDoc('9prodovzhennia-konkursu-audit.pdf'),
	},
	{
		title:
			"Продовження конкурсу з відбору суб'єкта аудиторської діяльності_ТОВ «ЛАЙТ ФІНАНС» від 22.08.2022",
		link: importDoc('10prodovzhennia-konkursu-audit.pdf'),
	},
	{
		title:
			"Оголошення про проведення конкурсу з відбору суб'єкта аудиторської діяльності ТОВ «ЛАЙТ ФІНАНС» від 31.01.2023 р.",
		link: importDoc('1.Ogoloshennya_konkurs_audit_LF.pdf'),
	},
	{
		title:
			'ПОВІДОМЛЕННЯ ПРО ОБРАННЯ АУДИТОРСЬКОЇ ФІРМИ ДЛЯ ПРОВЕДЕННЯ АУДИТУ ЗА 2022 рік від 27.02.2023 р.',
		link: importDoc('2.POVIDOMLENNYA_-AUDITU_LF_2023.pdf'),
	},
];
