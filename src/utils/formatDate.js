import siteConfig from '$settings/siteConfig.js';

const formatDate = (date) => {
	return new Date(date).toLocaleDateString(siteConfig.locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};

export default formatDate;
