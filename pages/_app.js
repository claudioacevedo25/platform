import { UserProvider } from '@auth0/nextjs-auth0';
import {ThemeContextProvider} from '@splight-ae/splight-ui';
import {IntlProvider} from 'react-intl';
import messages from '../translations';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeContextProvider>
			<UserProvider>
				<IntlProvider locale="en" messages={messages['en']}>
					<Component {...pageProps} />
				</IntlProvider>
			</UserProvider>
		</ThemeContextProvider>
	);
}

export default MyApp;
