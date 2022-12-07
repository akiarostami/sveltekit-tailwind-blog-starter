import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

async function registerEmail(email) {
	const KLAVIYO_API_KEY = env.KLAVIYO_API_KEY;
	const KLAVIYO_LIST_ID = env.KLAVIYO_LIST_ID;

	try {
		const response = await fetch(
			`https://a.klaviyo.com/api/v2/list/${KLAVIYO_LIST_ID}/subscribe?api_key=${KLAVIYO_API_KEY}`,
			{
				method: 'POST',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
				// You can add additional params here i.e. SMS, etc.
				// https://developers.klaviyo.com/en/reference/subscribe
				body: JSON.stringify({ profiles: [{ email: email }] })
			}
		);

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
