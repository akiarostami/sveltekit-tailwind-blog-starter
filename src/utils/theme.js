import { browser } from '$app/environment';

import { config } from '$lib/config';

const isLocalStorageAvailable = () => {
	var test = 'test';
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch (e) {
		return false;
	}
};
const isDarkMode = () => {
	let darkMode = false;
	if (browser) {
		if (isLocalStorageAvailable() && 'theme' in localStorage) {
			darkMode = localStorage.theme === 'dark';
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			darkMode = true;
		} else {
			darkMode = config.theme === 'dark';
		}
	} else if (isLocalStorageAvailable()) {
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
