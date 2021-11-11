import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { Header, Avatar, Popover, Typography, Button } from '@splight-ae/splight-ui';
import { pages } from '../../constants/pages';
import style from './defaultLayout.module.css';

const DefaultLayout = ({ children }) => {
	const isLoginPage = children.type.name === 'Login';
	const { user } = useUser();

	const avatar =
		<Popover position="right" displayLabel={<Avatar src={user && user.picture} name={user && user.given_name} />}>
			<Avatar
				src={user && user.picture}
				name={user && user.name}
			/>
			<Typography variant="h3">{user && user.given_name}</Typography>
			<Button>My Profile</Button>
		</Popover>;

	const [currentPage, setCurrentPage] = useState(pages[0]);
	const changePage = (page) => {
		setCurrentPage(page);
	};
	return (
		<>
			{
				!!user && <Header pages={pages} currentPage={currentPage} onClick={changePage} user={avatar} />
			}

			<main className={`${style.defaultLayout__main} ${!!isLoginPage && style.defaultLayout__login}`}>{children}</main>
		</>
	);
};

export default DefaultLayout;