import React from 'react'; 
import { injectIntl, FormattedMessage } from 'react-intl';
import { SplightRoundedIcon, Typography, BasicCard } from '@splight-ae/splight-ui'; 
import messages from './homePage.messages';
import style from './homePage.module.css';

const HomePageComponent = () => {
	return (
		<div className={style.homePage__container}>
			<div className={style.homePage__welcome}>
				<div className={style.homePage__welcome__icon}>
					<SplightRoundedIcon size={90}/>
				</div>
				<div className={style.homePage__welcome__icon}>
					<Typography  variant='h1' >
						<FormattedMessage {...messages.title}/>
					</Typography>
				</div>
			</div>
			<div className={style.homePage__content}>
				<div className={style.homePage__content__tabs}>
                    tabs
				</div>
				<div className={style.homePage__content__cards}>
					<BasicCard title="Digital Protection Manager" subtitle="Go Now" width="250" height="124"/>
					<BasicCard title="Digital Protection Manager" subtitle="Go Now" width="250" height="124"/>
					<BasicCard title="Digital Protection Manager" subtitle="Go Now" width="250" height="124"/>
				</div>
			</div>
		</div>
	);
};

export default injectIntl(HomePageComponent);