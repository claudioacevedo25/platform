import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
export default handleAuth({
	async login(req, res) {
		try {
			await handleLogin(req, res, {
				returnTo: '/home',
				authorizationParams: {
					audience: 'https://splight-ae.com/test', // or AUTH0_AUDIENCE
					// Add the `offline_access` scope to also get a Refresh Token
					scope: 'openid profile email read:assets' // or AUTH0_SCOPE
				}
			});
		} catch (error) {
			res.status(error.status || 400).end(error.message);
		}
	}
});