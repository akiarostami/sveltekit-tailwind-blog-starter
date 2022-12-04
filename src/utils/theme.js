import { browser } from '$app/environment';

import siteConfig from '$settings/siteConfig.js';

const isDarkMode = () => {
	let darkMode = false;
	if (browser) {
		if ('theme' in localStorage) {
			darkMode = localStorage.theme === 'dark';
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			darkMode = true;
		} else {
			darkMode = siteConfig.theme === 'dark';
		}
	} else {
		darkMode = localStorage.theme === 'dark';
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
