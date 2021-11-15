import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUser } from '@auth0/nextjs-auth0';
import { Header, Avatar, Popover, Typography, Button, ThemeContext } from '@splight-ae/splight-ui';
import { USER_METADATA_AUTH0 } from '../../constants/api';
import { pages } from '../../constants/pages';
import style from './defaultLayout.module.css';

const DefaultLayout = ({ children }) => {
	const { setTheme } = useContext(ThemeContext);
	const { user } = useUser();

	const isLoginPage = children.type.name === 'Login';

	const user_metadata = (user && user[USER_METADATA_AUTH0]) && user[USER_METADATA_AUTH0];
	const theme = user_metadata && user_metadata.theme;
	
	useEffect(() => {
		!!user && !!theme  && setTheme(theme);
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

DefaultLayout.defaultProps = {
	children: <></>,
};

DefaultLayout.propTypes = {
	children: PropTypes.element.isRequired,
};

export default DefaultLayout;