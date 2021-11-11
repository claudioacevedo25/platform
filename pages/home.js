// pages/protected-page.js
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Typography } from '@splight-ae/splight-ui';

export default function Home({user}) {
	return (
		
		<div className="home">
			<Typography>Welcome {user.name}</Typography>
			<div> <a href="/api/auth/logout"> Logout</a></div>
		</div>
	);
}

export const getServerSideProps = withPageAuthRequired();
