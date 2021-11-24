import React, { useEffect, useState } from 'react';
import HomePageComponent from './homePage.component';
import { getDigitalOfferFav, getDigitalOfferRecent } from '../../pages/api/services/digitalOffer.services';

const HomePageContainer = () => {
	const [digitalOffer, setDigitalOffer] = useState({
		fav: [],
		recents: [],
	});

	const fetchFavs = async () => {
		if (!digitalOffer.fav.length) {
			try {
				const data = await getDigitalOfferFav();
				setDigitalOffer({ ...digitalOffer, fav: data.results });
			} catch (error) {
				console.log('error :>> ', error);
			}
		}
	};

	const fetchRecents = async () => {
		if (!digitalOffer.recents.length) {
			try {
				const data = await getDigitalOfferRecent();
				setDigitalOffer({ ...digitalOffer, recents: data.results });
			} catch (error) {
				console.log('error :>> ', error);
			}
		}
	};

	useEffect(() => {
		fetchFavs();
	}, []);

	return (
		<HomePageComponent
			digitalOffer={digitalOffer}
			fetchFavs={fetchFavs}
			fetchRecents={fetchRecents}
		/>
	);
};

export default HomePageContainer;