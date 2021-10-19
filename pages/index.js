import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './index.messages';

const Home = () => {
	return (
		<div >
			<FormattedMessage {...messages.home} />
		</div>
	);
};

export default injectIntl(Home);
