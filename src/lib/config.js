export const config = {
	title: 'رو به رو - مجموعه مقالات ترجمه شده',
	author: 'Ahmad Kiarostami',
	headerTitle: 'رو به رو',
	description: 'محموعه مقالات ترجمه شده',
	language: 'en-us',
	theme: 'light', // system, dark or light
	domain: 'http://www.rouberou.com/',
	siteUrl: 'https://www.rouberou.com/',
	// siteRepo: 'https://github.com/akiarostami/sveltekit-tailwind-blog-starter',
	siteLogo: '/icon-512.png',
	// image: '/img/avatar.png',
	// email: 'info@piedpiper.com',
	locale: 'fa-FA',
	primaryColor: '#8224e3',

	// supports buttondown, convertkit, emailoctopus, klaviyo, mailchimp, revue
	// use false or null to disable newsletter
	// check .env.example for settings needed values for each service
	// newsletter: 'mailchimp',

	multiuser: true
};

export const user = {
	name: 'admin',
	// avatar value can be removed for image
	avatar: '/logo.png',
	// twitter value can be removed for no link to twitter
	twitter: 'https://twitter.com/rouberou'
};

export const navLinks = [
	{ href: '/about', title: 'درباره ' },
	{ href: '/all', title: 'مقالات' }
];

export const openGraph = {
	enabled: true,
	width: 1200,
	height: 630
};

// supported systems: googleAnalytics, plausible, and simpleAnalytics
export const analytics = {
	googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
	plausibleDomain: '', // e.g. pied-piper-blog.netlify.app
	simpleAnalytics: false // true or false
};

// supported providers: giscus, utterances
export const comment = {
	// provider: 'giscus',
	giscus: {
		// Visit the link below, and follow the steps in the 'configuration' section
		// https://giscus.app/
		repo: 'akiarostami/sveltekit-tailwind-blog-starter',
		reposId: 'R_kgDOIen4kw',
		category: 'Sample Site Comments',
		categoryId: 'DIC_kwDOIen4k84CS9tX',
		mapping: 'pathname', // supported options: pathname, url, title
		reactionsEnabled: '1', // Emoji reactions: 1 = enable / 0 = disable
		// Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
		metadata: '0',
		// theme example: light, dark, dark_dimmed, dark_high_contrast
		// Place the comment box above the comments. options: bottom, top
		inputPosition: 'bottom',
		// Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
		lang: 'en',
		dataStrict: '0',
		loading: 'lazy',
		// theme example: light, dark, preferred_color_scheme, light_high_contrast, dark_high_contrast
		// light_protanopia, dark_protanopiam, light_tritanopia, dark_tritanopia, dark_dimmed, transparent_dark
		theme: 'light',
		// theme when dark mode
		darkTheme: 'dark',
		themeURL: ''
	},
	utterances: {
		// Visit the link below, and follow the steps in the 'configuration' section
		// https://utteranc.es/
		repo: 'akiarostami/sveltekit-tailwind-blog-starter',
		issueTerm: 'pathname', // supported options: pathname, url, title
		label: 'Comment 💬', // label (optional): Comment 💬
		// theme example: github-light, github-dark, preferred-color-scheme
		// github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light, gruvbox-dark"
		theme: 'github-light',
		// theme when dark mode
		darkTheme: 'github-dark'
	}
};
