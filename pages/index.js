import { injectIntl, FormattedMessage } from 'react-intl';
import { useUser } from '@auth0/nextjs-auth0';
import messages from '../components/index.messages';
//TODO Delete this comment

const Home = () => {

	const { user, error, isLoading } = useUser();
	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;
	if (user) {
		return (  
			<div>
				<div>
					<h1>
						<FormattedMessage {...messages.home}/>
					</h1>
				</div>
			Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
			</div>
		);
	}
	return <a href="/api/auth/login">Login</a>;
};

export default injectIntl(Home);
