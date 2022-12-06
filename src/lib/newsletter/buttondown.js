import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

async function registerEmail(email) {
	const BUTTONDOWN_API_KEY = env.BUTTONDOWN_API_KEY;
	const BUTTONDOWN_API_URL = env.BUTTONDOWN_API_URL;

	try {
		const API_ROUTE = `${BUTTONDOWN_API_URL}subscribers`;

		const response = await fetch(API_ROUTE, {
			body: JSON.stringify({ email }),
			headers: { Authorization: `Token ${BUTTONDOWN_API_KEY}`, 'Content-Type': 'application/json' },
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
