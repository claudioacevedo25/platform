// pages/protected-page.js
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useState } from 'react';
import Link from 'next/link';
export default function ProtectedPage({user}) {
	const [session, setSession] = useState({});

	const getSession = async () => {
		const res = await fetch('/api/auth/getSession');
		const data = await res.json();
		setSession(data);
	};

	return (
		<>
			<div>
				<button onClick={getSession}>Get info</button>
				<div>
					<pre>{JSON.stringify(session, null, 2)}</pre>
				</div>
				<Link href='/'>Volver</Link>
			</div>
			<div>{user.name} __ Protected content __ <a href="/api/auth/logout">Logout</a></div>
		</>
	);
}

export const getServerSideProps = withPageAuthRequired();
