import { FC } from 'react';

import s from './BlockSubTitle.module.scss';

const BlockSubTitle: FC<{
	title: string;
}> = ({ title }) => {
	return <h3 className={s.container}>{title}</h3>;
};

export default BlockSubTitle;
