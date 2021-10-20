import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function products(req, res) {
	try {
		const session  = await getSession(req, res);	
		//call to the external API and return the result in res.json		
		res.json({
			session,
		});
	} catch(error) {
		res.status(error.status || 500).end(error.message);
	}
});
