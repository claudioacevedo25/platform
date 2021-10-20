import {IntlProvider} from 'react-intl';
import {ThemeContextProvider} from '@splight-ae/splight-ui';
import messages from '../translations';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeContextProvider>
			<IntlProvider locale="en" messages={messages['en']}>
				<Component {...pageProps} />
			</IntlProvider>
		</ThemeContextProvider>);
  
}

export default MyApp;
