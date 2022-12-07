import { error } from '@sveltejs/kit';
import registerEmail from '$lib/services/newsletter';

export const POST = async ({ request }) => {
	console.log('POSTING TO NEWSLETTER');
	try {
		const { email } = await request.json();
		console.log('EMAIL:', email);
		// const data = await request.formData();
		// const email = data.get('email');
		let result = await registerEmail(email);

		return new Response(
			JSON.stringify(result, {
				status: result.status
			})
		);
	} catch (err) {
		console.error(err);
		throw error(400, "couldn't add email to the newsletter");
	}
};
