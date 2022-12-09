import { config } from '$lib/config';
import buttondown from './buttondown.js';
import convertkit from './convertkit.js';
import emailoctopus from './emailoctopus.js';
import klaviyo from './klaviyo.js';
import mailchimp from './mailchimp.js';
import revue from './revue.js';

const registerEmail = (email) => {
	// skip if there's not newsletter provider is selected
	if (!config.newsletter) return;

	switch (config.newsletter) {
		case 'mailchimp':
			return mailchimp(email);
		case 'emailoctopus':
			return emailoctopus(email);
		case 'buttondown':
			return buttondown(email);
		case 'convertkit':
			return convertkit(email);
		case 'klaviyo':
			return klaviyo(email);
		case 'revue':
			return revue(email);
		default:
			return;
	}
};

export default registerEmail;
