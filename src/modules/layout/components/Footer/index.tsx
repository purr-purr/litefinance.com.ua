import { APP_AUTHOR_SIGNATURE, APP_AUTHOR_WEBSITE } from '@utils/const';

import s from './Footer.module.scss';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={s.container}>
			<p>{currentYear}/ Всі права захищені</p>
			<p>
				Розробка сайту{' '}
				<a target="_blank" rel="noreferrer" href={APP_AUTHOR_WEBSITE}>
					{APP_AUTHOR_SIGNATURE}
				</a>
			</p>
		</footer>
	);
};

export default Footer;
