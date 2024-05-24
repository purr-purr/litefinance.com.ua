import { FC, type ReactNode } from 'react';

import s from './Accordion.module.scss';

const Accordion: FC<{
	title: string;
	children: ReactNode;
}> = ({ title, children }) => {
	return (
		<details className={s.container}>
			<summary className={s.heading}>{title}</summary>
			<div className={s.content}>{children}</div>
		</details>
	);
};

export default Accordion;
