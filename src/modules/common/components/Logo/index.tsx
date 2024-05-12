import { FC } from 'react';
import Link from 'next/link';

import { COMPANY_NAME } from '@utils/const';

import s from './Logo.module.scss';

const Logo: FC = () => {
	return (
		<Link href="/" className={s.container}>
			{COMPANY_NAME[0]}
			<span>{COMPANY_NAME[1]}</span>
		</Link>
	);
};

export default Logo;
