import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import LoginPage from '../components/LoginPage';

const Login = () => {
	const { user } = useUser();
	const router = useRouter();
	useEffect(() => {
		!!user && router.push('/home');
	}, [user]);

	return !user && <LoginPage />;
};

export default Login;
