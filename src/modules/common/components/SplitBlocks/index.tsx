import { FC, type ReactNode } from 'react';

import BlockSubTitle from '@modules/common/components/BlockSubTitle';

import s from './SplitBlocks.module.scss';

const SplitBlocks: FC<{
	children: ReactNode;
	title: string;
	titleType: 'text' | 'heading';
	anchor?: string;
}> = ({ children, titleType, title, anchor }) => {
	return (
		<article className={s.container} id={anchor}>
			<aside className={s.leftSide}>
				{titleType === 'text' && <h4 className={s.title}>{title}</h4>}
				{titleType === 'heading' && <BlockSubTitle title={title} />}
			</aside>

			<div className={s.rightSide}>{children}</div>
		</article>
	);
};

export default SplitBlocks;
