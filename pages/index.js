import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import { Spinner } from '@splight-ae/splight-ui';
import LoginPage from '../components/LoginPage';

const Login = () => {
	const { user, isLoading } = useUser();
	const router = useRouter();
	useEffect(() => {
		!!user && router.push('/home');
	}, [user]);

	return (
		isLoading || !!user
			?
			<Spinner />
			:
			<LoginPage />
	);
};

export default Login;
