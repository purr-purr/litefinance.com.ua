import { useContext } from 'react';
import Image from 'next/image';

import { HeaderContext } from '@modules/layout/context/HeaderContext';

import CLOSE_ICON from '@public/assets/icon-menu-cross.svg';
import OPEN_ICON from '@public/assets/icon-menu.svg';

import s from './NavigationButton.module.scss';

const NavigationButton = () => {
	const { handleMobileNavMode, isMobileNavMode } = useContext(HeaderContext);

	return (
		<button
			className={s.container}
			onClick={() => handleMobileNavMode(!isMobileNavMode)}
		>
			<Image src={isMobileNavMode ? CLOSE_ICON : OPEN_ICON} alt="menu" />
		</button>
	);
};

export default NavigationButton;
