import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function products(req, res) {
	try {
		const { accessToken } = await getAccessToken(req, res);	
		//call to the external API and return the result in res.json	
		res.json({
			accessToken,
		});
	} catch(error) {
		res.status(error.status || 500).end(error.message);
	}
});
