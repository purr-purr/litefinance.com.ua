import type {IDocumentsList} from "@utils/types";
import {IDocumentsListGroup} from "@utils/types";
import {importDoc} from "@utils/formatters";

export const innerRules: IDocumentsList[] = [
	{
		title: 'Кредити до 06.03.2024',
		link: importDoc('Rules_credits_Sent-Pro.pdf')
	},
	{
		title:
			'Фінансовий лізинг до 06.03.2024',
		link: importDoc('pravyla_lizyngSP.pdf')
	},
	{
		title:
			'Факторинг до 06.03.2024',
		link: importDoc('pravyla_faktoryngSP.pdf')
	},
	{
		title:
			'Кредити станом на 06.03.2024',
		link: importDoc('PRAVYLA-nadannia-yur.os.-ta-pidpryiemtsiam-nadannia-koshtiv-ta-bank.met.-u-kredyt.pdf')
	},
	{
		title:
			'Фінансовий лізинг станом на 06.03.2024',
		link: importDoc('PRAVYLA-nadannia-posluh-z-finansovoho-lizynhu.pdf')
	},
	{
		title:
			'Факторинг станом на 06.03.2024',
		link: importDoc('PRAVYLA-faktorynhu.pdf')
	}
];

export const infoFinancialInstitution: IDocumentsList[] = [
	{
		title: 'Свідоцтво про реєстрацію фінансової установи',
		link: importDoc('svid-reestr.pdf')
	},
	{
		title:
			'Розпорядження про видачу ліцензій',
		link: importDoc('rozp-lic.pdf')
	},
	{
		title:
			'Виписка з єдиного державного реєстру',
		link: importDoc('vypyska-edr.pdf')
	},
	{
		title:
			'Інформація щодо ТОВ «СЕНТ ПРО», умов та порядку діяльності, уключно щодо фінансових послуг, які надаються ТОВ «СЕНТ ПРО» клієнту',
		link: importDoc('1.Informatsiia_shchodo_umov_ta_poriadku_diialnosti_TOV_SENT_PRO.pdf')
	},
	{
		title:
			'Порядок обробки і захисту персональних даних у ТОВ «СЕНТ ПРО»',
		link: importDoc('4.Poriadok_obrobky_i_zakhystu_personalnykh_danykh-_TOV_SENT_PRO.pdf')
	},
	{
		title:
			'Публічна інформація про ТОВ «СЕНТ ПРО»',
		link: importDoc('5.Publichna_informatsiia_pro_kompaniiu_TOV_SENT_PRO.pdf')
	}
];

export const infoOwnershipStructure: IDocumentsListGroup[] = [
	{
		groupTitle: '2024', list: [
			{
				title: 'Схематичне зображення структури власності ТОВ "СЕНТ ПРО" станом на 01.01.2024',
				link: importDoc('1_Skhematychne-zobrazhennia-struktury-vlasnosti-TOV-SENT-PRO-na-01.01.2024.pdf')
			},
			{
				title: 'Відомості про остаточних ключових учасників у структурі власності надавача фінансових послуг ТОВ "СЕНТ ПРО" станом на 01.01.2024',
				link: importDoc('2_Vidomosti-pro-ostatochnykh-kliuchovykh-uchasnykiv-TOV-SENT-PRO-na-01.01.2024-dod.2.pdf')
			},
			{
				title: 'Відомості про власників істотної участі в надавачі фінансових послуг ТОВ "СЕНТ ПРО" станом на 01.01.2024',
				link: importDoc('3_Vidomosti-pro-vlasnykiv-istotnoi-uchasti-TOV-SENT-PRO-na-01.01.2024-dod.3.pdf')
			}
		]
	},
	{
		groupTitle: '2023', list: [
			{
				title: 'Схематичне зображення структури власності ТОВ "СЕНТ ПРО" станом на 01.01.2023',
				link: importDoc('1_Skhematychne-zobrazhennia-struktury-vlasnosti-TOV-SENT-PRO-na-01.01.2023.pdf')
			},
			{
				title: 'Відомості про остаточних ключових учасників у структурі власності надавача фінансових послуг ТОВ "СЕНТ ПРО" станом на 01.01.2023',
				link: importDoc('2_Vidomosti-pro-ostatochnykh-kliuchovykh-uchasnykiv-TOV-SENT-PRO-na-01.01.2023-dod.2.pdf')
			},
			{
				title: 'Відомості про власників істотної участі в надавачі фінансових послуг ТОВ "СЕНТ ПРО" станом на 01.01.2023',
				link: importDoc('3_Vidomosti-pro-vlasnykiv-istotnoi-uchasti-TOV-SENT-PRO-na-01.01.2023-dod.3.pdf')
			}
		]
	},
	{
		groupTitle: '2022', list: [
			{
				title: 'Схематичне зображення структури власності ТОВ "СЕНТ ПРО" станом на 01.01.2022',
				link: importDoc('1_Skhematychne-zobrazhennia-struktury-vlasnosti-TOV-Sent-Pro-stanom-na-01.01.2022.pdf')
			},
			{
				title: 'Відомості про остаточних ключових учасників у структурі власності надавача фінансових послуг ТОВ "СЕНТ ПРО" станом на 01.01.2022',
				link: importDoc('2_Vidomosti-pro-ostatochnykh-kliuchovykh-uchasnykiv_01.01.2022.pdf')
			},
			{
				title: 'Відомості про власників істотної участі в надавачі фінансових послуг ТОВ "СЕНТ ПРО" станом на 01.01.2022',
				link: importDoc('3_Vidomosti-pro-vlasnykiv-istotnoi-uchasti_01.01.2022.pdf')
			}
		]
	}
];

export const financeReports: IDocumentsListGroup[] = [
	{
		groupTitle: '2022', list: [
			{
				title: 'Баланс (Звіт про фінансовий стан) станом на 31.12.2022 р',
				link: importDoc('f1-2022.pdf')
			},
			{
				title: 'Звіт про фінансові результати (про сукупний дохід) за 2022 р',
				link: importDoc('f2-2022.pdf')
			},
			{
				title: 'Звіт про рух грошових коштів (за прямим методом) за 2022 р',
				link: importDoc('f3-2022.pdf')
			},
			{
				title: 'Звіт про власний капітал за 2022 р.',
				link: importDoc('f4-2022.pdf')
			},
			{
				title: 'Примітки до річної фінансової звітності за 2022 р',
				link: importDoc('f5-2022.pdf')
			},
		]
	},
	{
		groupTitle: '2021', list: [
			{
				title: 'Баланс (Звіт про фінансовий стан) станом на 31.12.2021 р',
				link: importDoc('f1-2021.pdf')
			},
			{
				title: 'Звіт про фінансові результати (про сукупний дохід) за 2021 р',
				link: importDoc('f2-2021.pdf')
			},
			{
				title: 'Звіт про рух грошових коштів (за прямим методом) за 2021 р',
				link: importDoc('f3-2021.pdf')
			},
			{
				title: 'Звіт про власний капітал за 2021 р.',
				link: importDoc('f4-2021.pdf')
			},
			{
				title: 'Примітки до річної фінансової звітності за 2021 р',
				link: importDoc('prymitky_2021.doc')
			}
		]
	}, {
		groupTitle: '2020', list: [
			{
				title: 'Фінансова звітність за 2020 рік',
				link: importDoc('zvit-2020.pdf')
			}
		]
	},
];

export const archivedInformation: IDocumentsList[] = [
	{
		title: 'Правила надання коштів у позику, в тому числі і на умовах фінансового кредиту - Редакція, яка діяла до 14.06.2023 включно',
		link: importDoc('rules-credits-16082021.pdf')
	}
];

export const auditReports: IDocumentsList[] = [
	{
		title: 'Звіт незалежного аудитора щодо фінансової звітності ТОВ «СЕНТ ПРО» за 2020 рік',
		link: importDoc('zvit-audit2020.pdf')
	},
	{
		title: 'Звіт незалежного аудитора щодо фінансової звітності ТОВ «СЕНТ ПРО» за 2021 рік',
		link: importDoc('aud-zvit-2021.pdf')
	},
	{
		title: 'Звіт незалежного аудитора щодо фінансової звітності ТОВ «СЕНТ ПРО» за 2022 рік',
		link: importDoc('zvit-audit2022.pdf')
	}
];

export const news: IDocumentsList[] = [
	{
		title: 'Оголошення про проведення конкурсу з відбору суб\'єкта аудиторської діяльності ТОВ «СЕНТ ПРО» від 31.01.2023 р.',
		link: importDoc('1.konkurs_audit_SENT_PRO.pdf')
	},
	{
		title: 'ПОВІДОМЛЕННЯ ПРО ОБРАННЯ АУДИТОРСЬКОЇ ФІРМИ ДЛЯ ПРОВЕДЕННЯ АУДИТУ ЗА 2022 рік від 27.02.2023',
		link: importDoc('2.POVIDOMLENNYA_KONKURS-AUDIT_SENT_PRO_2023.pdf')
	},
	{
		title: 'ПОРЯДОК проведення конкурсу з відбору суб’єктів аудиторської діяльності для надання послуг обов’язкового аудиту фінансової звітності ТОВ «СЕНТ ПРО»',
		link: importDoc('1poryadok-proved-konkursu-audit.pdf')
	},
	{
		title: 'Оголошення про проведення конкурсу з відбору суб\'єкта аудиторської діяльності_ТОВ «СЕНТ ПРО» від 04.01.2022',
		link: importDoc('2ogoloshennia-pro-proved-konkursu-audit.pdf')
	},
	{
		title: 'Продовження конкурсу з відбору суб\'єкта аудиторської діяльності_ТОВ «СЕНТ ПРО» від 21.01.2022',
		link: importDoc('3prodovzhennia-konkursu-audit.pdf')
	},
	{
		title: 'Продовження конкурсу з відбору суб\'єкта аудиторської діяльності_ТОВ «СЕНТ ПРО» від 21.02.2022',
		link: importDoc('4prodovzhennia-konkursu-audit.pdf')
	},
	{
		title: 'Продовження конкурсу з відбору суб\'єкта аудиторської діяльності_ТОВ «СЕНТ ПРО» від 21.03.2022',
		link: importDoc('5prodovzhennia-konkursu-audit.pdf')
	},
	{
		title: 'Продовження конкурсу з відбору суб\'єкта аудиторської діяльності_ТОВ «СЕНТ ПРО» від 21.04.2022',
		link: importDoc('6prodovzhennia-konkursu-audit.pdf')
	},
	{
		title: 'Продовження конкурсу з відбору суб\'єкта аудиторської діяльності_ТОВ «СЕНТ ПРО» від 21.05.2022',
		link: importDoc('7prodovzhennia-konkursu-audit.pdf')
	}, {
		title: 'Продовження конкурсу з відбору суб\'єкта аудиторської діяльності_ТОВ «СЕНТ ПРО» від 21.06.2022',
		link: importDoc('8prodovzhennia-konkursu-audit.pdf')
	}, {
		title: 'Продовження конкурсу з відбору суб\'єкта аудиторської діяльності_ТОВ «СЕНТ ПРО» від 21.07.2022',
		link: importDoc('9prodovzhennia-konkursu-audit.pdf')
	}, {
		title: 'Продовження конкурсу з відбору суб\'єкта аудиторської діяльності_ТОВ «СЕНТ ПРО» від 21.08.2022',
		link: importDoc('10prodovzhennia-konkursu-audit.pdf')
	}, {
		title: 'ІНФОРМАЦІЙНЕ ПОВІДОМЛЕННЯ_про результати конкурсу аудиту_ТОВ «СЕНТ ПРО» 2021',
		link: importDoc('11-povidomlennia-rez-konkursu-audit2021.pdf')
	}
];
