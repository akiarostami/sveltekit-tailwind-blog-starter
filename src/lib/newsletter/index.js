import siteConfig from '$settings/siteConfig';
import mailchimp from './mailchimp.js';
import emailoctopus from './emailoctopus.js';
import buttondown from './buttondown.js';
import convertkit from './convertkit.js';
import klaviyo from './klaviyo.js';
import revue from './revue.js';

const registerEmail = (email) => {
	// skip if there's not newsletter provider is selected
	if (!siteConfig.newsletter.provider) return;

	switch (siteConfig.newsletter.provider) {
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
