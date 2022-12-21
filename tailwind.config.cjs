const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			height: {
				halfScreen: '50vh',
			},
			backgroundImage: {
        logo: "url('/logo.svg')",
      },
			boxShadow: {
				main: '0 30px 50px 0 rgb(1 1 1 / 25%)',
				hover: '0 10px 20px 0 rgb(1 1 1 / 20%)'
			},
			zIndex: {
				header: 9001,
      },
			spacing: {
				'9/16': '56.25%'
			},
			lineHeight: {
				11: '2.75rem',
				12: '3rem',
				13: '3.25rem',
				14: '3.5rem'
			},
			fontFamily: {
				title: ['Open Sans', 'Vazirmatn', ...defaultTheme.fontFamily.sans],
				body: ['Open Sans', 'Vazirmatn', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				primary: '#8224e3',
				gray: colors.neutral
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.700'),
						a: {
							'&:hover': {
								color: `${theme('colors.primary')} !important`
							},
						},
						h1: {
							fontWeight: '800',
							color: theme('colors.green.900')
						},
						h2: {
							fontWeight: '800',
							color: theme('colors.gray.900')
						},
						h3: {
							fontWeight: '800',
							color: theme('colors.gray.900')
						},
						'h4,h5,h6': {
							color: theme('colors.gray.900')
						},
						pre: {
							backgroundColor: theme('colors.gray.800')
						},
						code: {
							color: theme('colors.pink.500'),
							backgroundColor: theme('colors.gray.100'),
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem'
						},
						'code::before': {
							content: 'none'
						},
						'code::after': {
							content: 'none'
						},
						details: {
							backgroundColor: theme('colors.gray.100'),
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '2px',
							paddingBottom: '2px',
							borderRadius: '0.25rem'
						},
						hr: { borderColor: theme('colors.gray.200') },
						'ol li::marker': {
							fontWeight: '600',
							color: theme('colors.gray.500')
						},
						'ul li::marker': {
							backgroundColor: theme('colors.gray.500')
						},
						strong: { color: theme('colors.gray.600') },
						blockquote: {
							color: theme('colors.gray.900'),
							borderLeftColor: theme('colors.gray.200')
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
