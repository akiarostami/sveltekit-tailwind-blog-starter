import siteConfig from '$settings/siteConfig';
import mailchimp from './mailchimp';

const registerEmail = (email) => {
	// skip if there's not newsletter provider is selected
	if (!siteConfig.newsletter.provider) return;

	switch (siteConfig.newsletter.provider) {
		case 'mailchimp':
			console.log('REGISTERING WITH MAILCHIMP:', email);
			return mailchimp(email);
		default:
			return;
	}
};

export default registerEmail;
