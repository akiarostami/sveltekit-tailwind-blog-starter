import siteConfig from '$settings/siteConfig';

let ID = siteConfig.analytics.googleAnalyticsId;
let isLoadingLibrary = false;

export default function init() {
	// if the library is already loaded, do nothing
	if (window._gat && window._gat?._getTracker) return;

	if (isLoadingLibrary) return;

	isLoadingLibrary = true;

	const script1 = document.createElement('script');
	script1.strategy = 'lazyOnload';
	script1.type = 'text/javascript';
	script1.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`;
	script1.onload = () => {
		isLoadingLibrary = false;
	};

	const script2 = document.createElement('script');
	script2.setAttribute('id', 'ga-script');
	script2.strategy = 'lazyOnload';
	script2.type = 'text/javascript';
	script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${ID}', {
      page_path: window.location.pathname,
    });
  `;

	document.head.appendChild(script1);
	document.head.appendChild(script2);
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = (action, category, label, value) => {
	window.gtag?.('event', action, {
		event_category: category,
		event_label: label,
		value: value
	});
};
