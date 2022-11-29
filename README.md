# Tailwind Sveltekit Starter Blog

This is a [Sveltekit](https://kit.svelte.dev/) + [Tailwind CSS](https://tailwindcss.com/) blogging starter template with markdown support and easily configurable and customizable. It is inspired by [Timothy Lin](https://github.com/timlrx/)'s [Tailwind Nextjs Started Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog), plus (and minus) some features. Most important added features to Timothy's template are og:image and Netlify CMS support with a minimal configuration.

## Motivation

I've been looking for a good, flexible template for Sveltekit / Tailwind, but all templates I found were either too simple and didn't have some needed features, or were too difficult to customize (or both). I loved Timothy Lin's simple but feature-rich template for Next.js, so I decided to port that to Sveltekit, and add a couple of things I needed: Netlify CMS and dynamic og:image.

This is my first attempt to write something in Sveltekit.

## Features

- [x] Full support of [Sveltekit](https://kit.svelte.dev/) (latest RC version)
- [x] Easy style customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3)
- [x] Great lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/210111_DiC1_08f3670c3430bf4a9b76fc3b927716c5/)
- [x] Mobile-friendly view
- [x] Markdown support
- [x] Support for Light and dark theme
- [x] Support for tags - each unique tag will be its own page
- [x] Support for Pre-render
- [x] og:image
- [x] SEO friendly with RSS feed, sitemaps and more!
- [ ] Markdown components
  - [ ] Links
  - [ ] Video
  - [ ] Image
- [ ] Supports for different analytics systems
  - [ ] [plausible](https://plausible.io/)
  - [ ] [simple analytics](https://simpleanalytics.com/)
  - [ ] google analytics
- [ ] Support for multiple authors
- [ ] Support for different Newsletter system
  - [ ] mailchimp
  - [ ] buttondown
  - [ ] convertkit
  - [ ] klaviyo
  - [ ] revue
  - [ ] emailoctopus
- [ ] Netlify CMS
- [ ] Pagination
- [ ] Search (fuse.js or [alternatives](https://github.com/leeoniya/uFuzzy#user-content-benchmark))
- [ ] SEO OpenGraph Info

## Quick Start Guide

1. Installing the starter

```bash
npx degit https://github.com/akiarostami/sveltekit-tailwind-blog-starter
```

2. Personalize `siteConfig.js` (site related information)
3. Personalize `authors/default.md` (main author)
4. Modify `projectsData.js`
5. Modify `headerNavLinks.js` to customize navigation links
6. Add blog posts
7. Deploy on Netlify

## Installation

```bash
npm install
```

## Development

First, run the development server:

```bash
npm start
```

or

```bash
npm run dev
```

Open your local host (probably [http://localhost:5173/](http://localhost:5173/)) with your browser to see the result.

You can start editing the pages under `routes`.

## Extend / Customize

`data/siteConfig.js` - contains most of the site related information which should be modified for a user's need.

`data/authors/default.md` - default author information (required). Additional authors can be added as files in `data/authors`.

`data/projectsData.js` - data used to generate styled card on the projects page.

`data/headerNavLinks.js` - navigation links.

`data/logo.svg` - replace with your own logo.

`data/blog` - replace with your own blog posts.

`public/static` - store assets such as images and favicons.

`tailwind.config.js` and `css/tailwind.css` - contain the tailwind stylesheet which can be modified to change the overall look and feel of the site.

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information.

`fonts` - Opan Graph Image (og:image) needs a local copy of the fonts (under `src/lib/fonts`) you use for the OG image.

## Netlify CMS configuration

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Netlify / GitHub Pages / Firebase etc.**  
As the template uses `next/image` for image optimization, additional configurations have to be made to deploy on other popular static hosting websites like [Netlify](https://www.netlify.com/) or [GitHub Pages](https://pages.github.com/). An alternative image optimization provider such as Imgix, Cloudinary or Akamai has to be used. Alternatively, replace the `next/image` component with a standard `<img>` tag. See [`next/image` documentation](https://nextjs.org/docs/basic-features/image-optimization) for more details.

The API routes used in the newsletter component cannot be used in a static site export. You will need to use a form API endpoint provider and substitute the route in the newsletter component accordingly. Other hosting platforms such as Netlify also offer alternative solutions - please refer to their docs for more information.

## Support

Support this template and effort by giving it a star on GitHub, sharing your own blog, and giving a shout-out on Twitter.

## License

[MIT](https://github.com/akiarostami/sveltekit-tailwind-blog-starter/blob/master/LICENSE) © [Ahmad Kiarostami](https://www.ahmadkiarostami.com)
