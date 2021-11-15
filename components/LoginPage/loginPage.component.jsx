import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { SplightNameIcon, SplightRoundedIcon, Typography, Button } from '@splight-ae/splight-ui';
import messages from './loginPage.messages';
import style from './loginPage.module.css';

const LoginPageComponent = () => {

	const redirect = ()=> {
		window.location.href = '/api/auth/login';
	};

	return(
		<div className={style.loginPage__container}>
			<div className={style.loginPage__navIcon}>
				<SplightNameIcon size={53}/>
			</div>
			<div className={style.loginPage__content}>
				<div className={style.loginPage__content__item}>
					<SplightRoundedIcon size={90}/>
				</div>
				<div className={style.loginPage__content__item}>
					<Typography  variant='h1' >
						<FormattedMessage {...messages.title}/>
					</Typography>
				</div>
				<div className={`${style.loginPage__content__item} ${style.loginPage__content__typography}`}> 
					<Typography variant='h2' size="1">
						<FormattedMessage {...messages.subtitle}/>
					</Typography>
				</div>
				<div className={`${style.loginPage__content__item} ${style.loginPage__content__button}`}>
					<Button onClick={()=> redirect()} >
						<FormattedMessage {...messages.loginButton}/>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default injectIntl(LoginPageComponent);