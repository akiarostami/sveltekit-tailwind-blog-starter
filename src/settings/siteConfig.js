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
		plausibleDataDomain: '', // e.g. pied-piper-blog.netlify.app
		simpleAnalytics: false // true or false
	},
	newsletter: {
		// supports mailchimp, emailoctopus, buttondown, convertkit, klaviyo, revue
		// Please add your .env file and modify it according to your selection
		provider: 'mailchimp',
		mailchimp: {
			dc: 'us19', // the data center for your account, for example "us6"
			listId: 'b26ef51678' // your list id (https://mailchimp.com/help/find-audience-id/)
			// MAILCHIMP_API_KEY should be added to the .env file
		}
	}
	/*
	comment: {
		// If you want to use a commenting system other than giscus you have to add it to the
		// content security policy in the `next.config.js` file.
		// Select a provider and use the environment variables associated to it
		// https://vercel.com/docs/environment-variables
		provider: 'giscus', // supported providers: giscus, utterances, disqus
		giscusConfig: {
			// Visit the link below, and follow the steps in the 'configuration' section
			// https://giscus.app/
			repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
			repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
			category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
			categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
			mapping: 'pathname', // supported options: pathname, url, title
			reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
			// Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
			metadata: '0',
			// theme example: light, dark, dark_dimmed, dark_high_contrast
			// transparent_dark, preferred_color_scheme, custom
			theme: 'light',
			// Place the comment box above the comments. options: bottom, top
			inputPosition: 'bottom',
			// Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
			lang: 'en',
			// theme when dark mode
			darkTheme: 'transparent_dark',
			// If the theme option above is set to 'custom`
			// please provide a link below to your custom theme css file.
			// example: https://giscus.app/themes/custom_example.css
			themeURL: ''
		},
		utterancesConfig: {
			// Visit the link below, and follow the steps in the 'configuration' section
			// https://utteranc.es/
			repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
			issueTerm: '', // supported options: pathname, url, title
			label: '', // label (optional): Comment 💬
			// theme example: github-light, github-dark, preferred-color-scheme
			// github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
			theme: '',
			// theme when dark mode
			darkTheme: ''
		},
		disqusConfig: {
			// https://help.disqus.com/en/articles/1717111-what-s-a-shortname
			shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME
		}
	}
*/
};

export default siteConfig;
