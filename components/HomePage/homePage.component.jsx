import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import { SplightRoundedIcon, Typography, BasicCard, Tabs, Tab } from '@splight-ae/splight-ui';
import messages from './homePage.messages';
import style from './homePage.module.css';

const HomePageComponent = ({ digitalOffer, fetchFavs, fetchRecents }) => {
	return (
		<div className={style.homePage__container}>
			<div className={style.homePage__welcome}>
				<div className={style.homePage__welcome__icon}>
					<SplightRoundedIcon size={67} />
				</div>
				<div className={style.homePage__welcome__icon}>
					<Typography variant='h2' >
						<FormattedMessage {...messages.title} />
					</Typography>
				</div>
			</div>
			<div className={style.homePage__content}>
				<Tabs width='80'>
					<Tab onClick={fetchFavs} className={style.homePage__content__tab} label='fav' tabName='Fav' height='50'>
						{
							!digitalOffer.fav.length ? <BasicCard title={'There are not Favs'} subtitle='No Actions' width='250' height='137'/> :
								digitalOffer.fav.map((favorite, index) =>
									<BasicCard key={index} title={favorite.title} subtitle='Go Now' width='250' height='137' />
								)
						}
					</Tab>
					<Tab onClick={fetchRecents} className={style.homePage__content__tab} label='recents' tabName='Recents' height='50'>
						{
							!digitalOffer.recents.length ? <BasicCard title={'There are not Recents'} subtitle='No Actions' width='250' height='137'/> :
								digitalOffer.recents.map((recent, index) =>
									<BasicCard key={index} title={recent.title} subtitle='Go Now' width='250' height='137' />
								)
						}
					</Tab>
					<Tab className={style.homePage__content__tab} label='widgets' tabName='Widgets' height='50' disabled></Tab>
				</Tabs>
			</div>
		</div>
	);
};

HomePageComponent.defaultProps = {
	digitalOffer: {},
	fetchFavs: () => { },
	fetchRecents: () => {},
};

HomePageComponent.propTypes = {
	digitalOffer: PropTypes.object.isRequired,
	fetchFavs: PropTypes.func.isRequired,
	fetchRecents: PropTypes.func.isRequired,
};

export default injectIntl(HomePageComponent);