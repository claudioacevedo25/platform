import React, { useState, useContext, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { Header, Avatar, Popover, Typography, Button, ThemeContext } from '@splight-ae/splight-ui';
import { pages } from '../../constants/pages';
import style from './defaultLayout.module.css';

const DefaultLayout = ({ children }) => {
	const { setTheme } = useContext(ThemeContext);
	const { user } = useUser();

	const isLoginPage = children.type.name === 'Login';
	const metadataUrl = 'https://platform.splight-ae.com/user_metadata';

	const user_metadata = (user && user[metadataUrl]) && user[metadataUrl];
	const theme = user_metadata && user_metadata.theme;

	useEffect(() => {
		!!user && setTheme(theme);
	}, [user]);


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