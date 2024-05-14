import Logo from '@modules/common/components/Logo';
import Navigation from '@modules/layout/components/Navigation';
import NavigationButton from '@modules/layout/components/NavigationButton';
import {HeaderContextWrapper} from '@modules/layout/context/HeaderContext';

import {useMediaQuery} from '@modules/common/hooks';

import {LAPTOP_BREAKPOINT} from '@utils/const';

import s from './Header.module.scss';
import {useEffect, useState} from "react";
import cn from "classnames";

const Header = () => {
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const [scrollTop, setScrollTop] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={cn(s.container, scrollTop > 100 && s.active)}>
			<Logo/>

			<HeaderContextWrapper>
				<Navigation/>
				{isLaptop && <NavigationButton/>}
			</HeaderContextWrapper>
		</header>
	);
};

export default Header;
