import axios from 'axios';
import { httpRequestsValues } from '../constants/api';

const { POST, DELETE, GET, PUT } = httpRequestsValues;

const headers = {
	Authorization: 'Bearer ' + 'aca va el token',
};

const publicFetch = axios.create({
	baseURL: process.env.NEXT_PUBLIC_PLATFORM_BACKEND_URL,
	headers
});

const paramsByAction = ({action, params}) => {
	switch (action) {
	case GET:
		return { params };
	case POST:
		return params;

	default:
		return params;
	}
};

const actionFnIsOk = (action) =>
	action === GET || action === POST || action === PUT || action === DELETE;
/**
 *
 * @param {"get, post, put, delete"} action
 * @param {"resource path"} endpoint
 * @param {"the object data"} params
 * @returns Promise pattern
 */

const genericHttpRequest = async (action, endpoint, params = {}) => {
	const endpointIsOk = !!endpoint && typeof endpoint === 'string';
	const actionIsOk = actionFnIsOk(action);
	const paramsOk = endpointIsOk && actionIsOk;
	if (paramsOk) {
	
		try {
			const { data } = await publicFetch[action](endpoint,  paramsByAction(action, params));
			return data;
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log('error :>> ', error);
			throw error;
		}
	}
	throw new Error(`The method ${action} is not valid at endpoint ${endpoint}`);
};
export { genericHttpRequest };
  