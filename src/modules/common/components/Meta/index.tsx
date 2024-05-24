import { FC } from 'react';
import Head from 'next/head';

import {
	APP_AUTHOR_FULL_SIGNATURE,
	APP_LINK,
	COMPANY_CATCHPHRASE,
	COMPANY_FULL_NAME,
} from '@utils/const';

import FAVICON from '@public/assets/favicon.ico';
import LOGO from '@public/assets/logo.svg';

const Meta: FC<{
	title?: string;
}> = ({ title }) => {
	const manifestPath: string = '/assets/manifest.json';
	const metaTitle: string = title
		? `${title} ${COMPANY_FULL_NAME}`
		: COMPANY_FULL_NAME;
	const metaDesc: string = COMPANY_FULL_NAME + ' | ' + COMPANY_CATCHPHRASE;

	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="author" content={APP_AUTHOR_FULL_SIGNATURE} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link href={FAVICON.src} rel="icon" />
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta content="#F9F9F9" name="theme-color" />
			<meta content={metaTitle} name="description" />
			<link href={FAVICON.src} rel="apple-touch-icon" />
			<link href={manifestPath} rel="manifest" />
			<title>{metaTitle}</title>
			<meta name="description" content={metaDesc} />
			<meta name="image" content={LOGO.src} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={metaTitle} />
			<meta property="og:description" content={metaDesc} />
			<meta property="og:image" content={LOGO.src} />
			<meta property="og:url" content={APP_LINK} />
			<link rel="canonical" href={APP_LINK} />
			<meta name="apple-mobile-web-app-title" content={metaTitle} />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="format-detection" content="telephone=no" />
			<meta name="format-detection" content="address=no" />
		</Head>
	);
};

export default Meta;
