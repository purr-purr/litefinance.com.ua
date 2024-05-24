import { FC, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { v4 as uuidv4 } from 'uuid';

import type { IDocumentsList, IDocumentsListGroup } from '@utils/types';

import DOCUMENT_ICON from '../../assets/document-icon.svg';
import s from './DocumentsList.module.scss';

type IDocumentsLoop = IDocumentsList[];

const DocumentItem: FC<IDocumentsList> = ({ title, link }) => {
	return (
		<li className={s.item}>
			<Link href={link} target="_blank">
				<Image src={DOCUMENT_ICON} alt="icon" />
				{title}
			</Link>
		</li>
	);
};

const DocumentsList: FC<{
	list?: IDocumentsList[];
	groupList?: IDocumentsListGroup[];
}> = ({ list, groupList }) => {
	const uuid: string = uuidv4();

	const listLoop = (array: IDocumentsLoop) => {
		return (
			<ul className={s.container}>
				{array.map((item: IDocumentsList, index: number) => (
					<DocumentItem key={uuid + index} title={item.title} link={item.link} />
				))}
			</ul>
		);
	};

	return (
		<>
			{groupList?.map((item: IDocumentsListGroup, index: number) => (
				<Fragment key={uuid + index}>
					<h4 className={s.groupTitle}>{item.groupTitle}</h4>
					{listLoop(item.list)}
				</Fragment>
			))}
			{list && listLoop(list)}
		</>
	);
};

export default DocumentsList;
