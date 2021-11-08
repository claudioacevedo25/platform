import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ThemeContextProvider } from '@splight-ae/splight-ui';
import { IntlProvider } from 'react-intl';
import DefaultLayout from '../components/DefaultLayout';
import messages from '../translations';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

	return (
		<UserProvider>
			<IntlProvider locale="en" messages={messages['en']}>
				<ThemeContextProvider initialTheme="light" >
					<DefaultLayout>
						<Component {...pageProps} />
					</DefaultLayout>
				</ThemeContextProvider>
			</IntlProvider>
		</UserProvider>
	);
}

export default MyApp;
