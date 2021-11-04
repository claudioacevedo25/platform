import { injectIntl, FormattedMessage } from 'react-intl';
import { Header } from '@splight-ae/splight-ui';
import { useUser } from '@auth0/nextjs-auth0';
import messages from '../components/index.messages';

const Login = () => {
	const pages = [
		{ name: "home", id: 1, url: "/home" },
		{ name: "digital solution", id: 2, url: "/digital-solution" },
		{ name: "artificial energy", id: 3, url: "/artificial-energy" },
	];
	const [currentPage, setCurrentPage] = useState(pages[0]);
	const changePage = (page) => {
		setCurrentPage(page);
	};

// esta pagina va ser la que te redireccione a auth0, va ser nuestro "login"
	const { user, error, isLoading } = useUser();
	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;
	if (user) {
		return (  
			<div>
				<Header pages={pages} currentPage={currentPage} onClick={changePage} />
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

export default injectIntl(Login);
