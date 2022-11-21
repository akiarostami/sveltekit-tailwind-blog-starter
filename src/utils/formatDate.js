import siteMetadata from '$settings/siteMetadata.js';

const formatDate = (date) => {
	return new Date(date).toLocaleDateString(siteMetadata.locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};

export default formatDate;
