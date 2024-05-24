import { useContext, useEffect } from 'react';
import Link from 'next/link';

import { HeaderContext } from '@modules/layout/context/HeaderContext';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { LAPTOP_BREAKPOINT } from '@utils/const';
import { navigationList } from '@utils/data';
import type { INavigationList } from '@utils/types';

import s from './Navigation.module.scss';

const Navigation = () => {
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const { isMobileNavMode, handleMobileNavMode } = useContext(HeaderContext);

	useEffect(() => {
		const element = document.querySelector('html');
		if (!isLaptop) {
			handleMobileNavMode(false);
		}
		if (element) {
			element.setAttribute(
				'style',
				`${isMobileNavMode ? `overflow:hidden;` : ``}`,
			);
		}
	}, [isMobileNavMode, isLaptop]);

	return (
		<ul className={cn(s.container, isMobileNavMode && s.active)}>
			{navigationList.map(
				(item: INavigationList) =>
					item.isActive && (
						<li key={item.title} className={s.box}>
							<Link
								key={item.title}
								href={item.path}
								className={s.link}
								onClick={() => handleMobileNavMode(false)}
							>
								{item.title}
							</Link>
						</li>
					),
			)}
		</ul>
	);
};

export default Navigation;
