import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

async function registerEmail(email) {
	const REVUE_API_KEY = env.REVUE_API_KEY;
	const REVUE_API_URL = env.REVUE_API_URL;

	const REVUE_ROUTE = `${REVUE_API_URL}subscribers`;

	try {
		const response = await fetch(REVUE_ROUTE, {
			method: 'POST',
			headers: { Authorization: `Token ${REVUE_API_KEY}`, 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, double_opt_in: false })
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
