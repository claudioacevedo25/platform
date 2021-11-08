// pages/protected-page.js
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Home({user}) {
	return (
		
		<div className="home">
			Home {user.name} 	
			<div> <a href="/api/auth/logout"> Logout</a></div>
		</div>
	);
}

export const getServerSideProps = withPageAuthRequired();
