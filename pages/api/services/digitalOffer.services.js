import { genericHttpRequest } from '../publicFetch';
import {
	httpRequestsValues,
	DIGITAL_OFFER,
	DO_FAV,
	DO_RECENT,
} from '../../../constants/api';

const { GET } = httpRequestsValues;

/**
 *
 * @param {"email and password are required"} data
 * @returns Return the Login User and the user's token
 */


export const getDigitalOfferFav = () =>
	genericHttpRequest(GET, `${DIGITAL_OFFER}${DO_FAV}`);
 
export const getDigitalOfferRecent = () =>
	genericHttpRequest(GET, `${DIGITAL_OFFER}${DO_RECENT}`);


