let isLoadingLibrary = false;

export default function init() {
	// if the library is already loaded, do nothing
	if (window.sa_loaded) return;

	if (isLoadingLibrary) return;

	isLoadingLibrary = true;

	const script1 = document.createElement('script');
	script1.strategy = 'lazyOnload';
	script1.type = 'text/javascript';
	script1.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
	script1.onload = () => {
		isLoadingLibrary = false;
	};

	const script2 = document.createElement('script');
	script2.setAttribute('id', 'sa-script');
	script2.strategy = 'lazyOnload';
	script2.type = 'text/javascript';
	script2.innerHTML = `
    window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};
  `;

	document.head.appendChild(script1);
	document.head.appendChild(script2);
}

// https://docs.simpleanalytics.com/events
export const logEvent = (eventName, callback) => {
	if (callback) {
		return window.sa_event?.(eventName, callback);
	} else {
		return window.sa_event?.(eventName);
	}
};
