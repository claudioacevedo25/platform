import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import HomePage from '../components/HomePage';

export default function Home() {
	return (
		<HomePage />
	);
}

export const getServerSideProps = withPageAuthRequired();
