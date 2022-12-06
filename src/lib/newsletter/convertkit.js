import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

async function registerEmail(email) {
	const CONVERTKIT_FORM_ID = env.CONVERTKIT_FORM_ID;
	const CONVERTKIT_API_KEY = env.CONVERTKIT_API_KEY;
	const CONVERTKIT_API_URL = env.CONVERTKIT_API_URL;

	try {
		const data = { email, api_key: CONVERTKIT_API_KEY };

		const response = await fetch(`${CONVERTKIT_API_URL}forms/${CONVERTKIT_FORM_ID}/subscribe`, {
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST'
		});

		if (response.status >= 400) {
			throw error(400, "couldn't add email to the newsletter");
		} else {
			return new Response(JSON.stringify({ message: 'Email added to the newsletter' }), {
				status: 200
			});
		}
	} catch (err) {
		console.error(err);
		throw error(err.status, err.title);
	}
}

export default registerEmail;
