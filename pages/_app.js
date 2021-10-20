import { UserProvider } from '@auth0/nextjs-auth0';
import {IntlProvider} from 'react-intl';
import messages from '../translations';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<IntlProvider locale="en" messages={messages['en']}>
				<Component {...pageProps} />
			</IntlProvider>
		</UserProvider>
	);
}

export default MyApp;
