import {IntlProvider} from 'react-intl';
import messages from '../translations';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<IntlProvider locale="en" messages={messages['en']}>
			<Component {...pageProps} />
		</IntlProvider>);
  
}

export default MyApp;
