import type { AppProps } from 'next/app';

import Layout from '@modules/layout/components/Layout';

import { APP_AUTHOR_FULL_SIGNATURE } from '@utils/const';

import '@styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
	console.log(APP_AUTHOR_FULL_SIGNATURE);
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
