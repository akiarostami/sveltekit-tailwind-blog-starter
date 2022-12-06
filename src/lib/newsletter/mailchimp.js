import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import base64 from 'base-64';

import siteConfig from '$settings/siteConfig';

async function registerEmail(email) {
	const MAILCHIMP = siteConfig.newsletter.mailchimp;
	const MAILCHIMP_API_KEY = env.MAILCHIMP_API_KEY;

	try {
		const dc = MAILCHIMP.dc;
		const list_id = MAILCHIMP.listId;
		const url = `https://${dc}.api.mailchimp.com/3.0/lists/${list_id}/members`;
		const password = MAILCHIMP_API_KEY;

		const data = { email_address: email, status: 'subscribed' };

		let headers = new Headers();
		headers.append('Authorization', 'Basic ' + base64.encode('somestring:' + password));

		const response = await fetch(url, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(data)
		});
		const mailchimpResponse = await response.json();
		if (mailchimpResponse?.status !== 'subscribed') {
			console.error(mailchimpResponse);
			throw error(400, "couldn't add email to the newsletter");
		} else {
			return mailchimpResponse;
		}
	} catch (err) {
		console.error(err);
		throw error(err.status, err.title);
	}
}

export default registerEmail;
