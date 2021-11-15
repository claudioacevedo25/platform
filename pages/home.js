import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import HomePage from '../components/HomePage';

export default function Home({ user }) {
	return (
		<HomePage user={user} />
	);
}

export const getServerSideProps = withPageAuthRequired();
