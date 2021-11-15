import React from 'react';
import HomePageComponent from './homePage.component';

const HomePageContainer = ({ user }) => {
	return (
		<HomePageComponent user={user} />
	);
};

export default HomePageContainer;