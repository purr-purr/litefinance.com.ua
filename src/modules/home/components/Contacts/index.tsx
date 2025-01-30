import Link from 'next/link';

import BlockTitle from '@modules/common/components/BlockTitle';
import IconFrame from '@modules/common/components/IconFrame';

import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_MAP_LINK,
	COMPANY_PHONE,
} from '@utils/const';

import ICON_EMAIL from '@public/assets/icon-email.svg';
import ICON_MAP from '@public/assets/icon-map.svg';
import ICON_PHONE from '@public/assets/icon-phone.svg';
import ICON_TIME from '@public/assets/icon-time.svg';

import s from './Contacts.module.scss';

interface IContactItem {
	icon: string;
	title: string;
	desc: string;
	link?: string;
}

const Contacts = () => {
	const contactsList: IContactItem[] = [
		{
			icon: ICON_MAP,
			title: 'Адреса',
			desc: COMPANY_ADDRESS,
		},
		{
			icon: ICON_EMAIL,
			title: 'Електронна Пошта',
			desc: COMPANY_EMAIL,
			link: `mailto:${COMPANY_EMAIL}`,
		},
		{
			icon: ICON_PHONE,
			title: 'Телефон',
			desc: COMPANY_PHONE,
			link: `tel:${COMPANY_PHONE}`,
		},
		{
			icon: ICON_TIME,
			title: 'Години Роботи',
			desc: `ПН-ПТ з 9:00 до 19:00.\nОбідня перерва з 13:00 до 14:00.\nВихідні дні – субота та неділя`,
		},
	];

	return (
		<section className={s.container} id="contacts">
			<BlockTitle title="Контактна інформація" />

			<ul className={s.contacts}>
				{contactsList.map((item) => (
					<li key={item.title} className={s.contactsInner}>
						<IconFrame icon={item.icon} />
						<dl>
							<dt>{item.title}</dt>
							<dd>
								{item.link ? (
									<Link href={item.link} target="_blank">
										{item.desc}
									</Link>
								) : (
									item.desc
								)}
							</dd>
						</dl>
					</li>
				))}
			</ul>

			<div className={s.map}>
				<iframe
					className={s.mapFrame}
					src={COMPANY_MAP_LINK}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
		</section>
	);
};

export default Contacts;
