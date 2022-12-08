const siteConfig = {
	title: 'Pied Piper (un)official blog',
	author: 'Pied Piper',
	headerTitle: 'Pied Piper',
	description: 'Pied Piper (un)official blog, created with Sveltekit and Tailwind.css',
	language: 'en-us',
	theme: 'dark', // system, dark or light
	domain: 'http://www.piedpiper.com/',
	siteUrl: 'https://pied-piper-blog.netlify.app',
	siteRepo: 'https://github.com/akiarostami/sveltekit-tailwind-blog-starter',
	siteLogo: '/icon-512.png',
	image: '/img/avatar.png',
	email: 'info@piedpiper.com',
	github: 'https://github.com/piedpiper',
	twitter: 'https://twitter.com/piedpiperplc',
	facebook: 'https://www.facebook.com/piedpipersv',
	youtube: 'https://www.youtube.com/watch?v=p3RwX06wcBs',
	linkedin: 'https://www.linkedin.com/company/pied-piper-plc/',
	locale: 'en-US',
	primaryColor: '#06a261',
	multiuser: false,
	og: {
		enabled: true,
		width: 1200,
		height: 630
	},
	analytics: {
		// we support googleAnalytics, plausible, and simpleAnalytics
		googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
		plausibleDomain: '', // e.g. pied-piper-blog.netlify.app
		simpleAnalytics: false // true or false
	},

	// supports buttondown, convertkit, emailoctopus, klaviyo, mailchimp, revue
	// use false or null to disable newsletter
	// check .env.example for settings needed values for each service
	newsletter: 'mailchimp',

	comment: {
		// If you want to use a commenting system other than giscus you have to add it to the
		// content security policy in the `next.config.js` file.
		// Select a provider and use the environment variables associated to it
		// https://vercel.com/docs/environment-variables
		provider: 'giscus', // supported providers: giscus, utterances
		giscusConfig: {
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
		utterancesConfig: {
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
	}
};

export default siteConfig;
