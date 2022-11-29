import { browser } from '$app/environment';

import siteConfig from '$settings/siteConfig.js';

const isDarkMode = () => {
	let darkMode = false;
	if (browser) {
		if ('theme' in localStorage) {
			darkMode = localStorage.theme === 'dark';
			console.log('local storage theme is dark');
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			darkMode = true;
			console.log('prefers dark');
		} else {
			darkMode = siteConfig.theme === 'dark';
			console.log('site metadata theme is dark');
		}
	} else {
		darkMode = localStorage.theme === 'dark';
		console.log('local storage theme is dark too');
	}

	return darkMode;
};

const setDarkMode = (darkMode, save = true) => {
	if (darkMode) {
		document.documentElement.classList.add('dark');
		if (save) localStorage.theme = 'dark';
	} else {
		document.documentElement.classList.remove('dark');
		if (save) localStorage.theme = 'light';
	}
	return darkMode;
};

const toggleDarkMode = () => {
	return setDarkMode(!isDarkMode());
};

export { isDarkMode, setDarkMode, toggleDarkMode };
