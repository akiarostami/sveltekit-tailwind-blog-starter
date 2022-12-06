import siteConfig from '$settings/siteConfig';

let ID = siteConfig.analytics.plausibleDataDomain;
let isLoadingLibrary = false;

export default function init() {
	// if the library is already loaded, do nothing
	if (window.plausible) return;

	if (isLoadingLibrary) return;

	isLoadingLibrary = true;

	const script1 = document.createElement('script');
	script1.strategy = 'lazyOnload';
	script1.dataDomain = { ID };
	script1.type = 'text/javascript';
	script1.src = 'https://plausible.io/js/plausible.js';
	script1.onload = () => {
		isLoadingLibrary = false;
	};

	const script2 = document.createElement('script');
	script2.setAttribute('id', 'plausible-script');
	script2.strategy = 'lazyOnload';
	script2.type = 'text/javascript';
	script2.innerHTML = `
    window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
  `;

	document.head.appendChild(script1);
	document.head.appendChild(script2);
}

// https://plausible.io/docs/custom-event-goals
export const logEvent = (eventName, ...rest) => {
	return window.plausible?.(eventName, ...rest);
};
