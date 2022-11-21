# Tailwind Sveltekit Starter Blog

### Based on Timothy Lin's [Tailwind Nextjs Started Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)

This is a [Sveltekit](https://kit.svelte.dev/), [Tailwind CSS](https://tailwindcss.com/) blogging starter template, heavily based on [Timothy Lin](https://github.com/timlrx/)'s [Tailwind Nextjs Started Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog), plus and minus some features. Just like Timothy's wonderful starter kit, it is a feature-rich markdown blogging template, easily configurable and customizable. On top of features inherited from Timothy's template, it also supports og:image and Netlify CMS with a minimal configuration.

## Motivation

I've been looking for a good, flexible template for Sveltekit / Tailwind, but all I found was either too simple and didn't have the basic features, or was too difficult to customize (or both). I loved the simple but feature-rich template of Timothy for Next.js, so I decided to port that to Sveltekit, and add a couple of things I wish it had: Netlify CMS and dynamic og:image.

This is my first attempt to write something in Sveltekit.

## Features

- [x] Full support of [Sveltekit](https://kit.svelte.dev/) (latest RC version)
- [x] Easy style customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3)
- [x] Great lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/210111_DiC1_08f3670c3430bf4a9b76fc3b927716c5/)
- [x] Mobile-friendly view
- [x] Support for Light and dark theme
- [x] Markdown support
- [ ] Markdown components
  - [ ] Links
  - [ ] Video
  - [ ] Image
- [ ] Supports for different analytics systems
  - [ ] [plausible](https://plausible.io/)
  - [ ] [simple analytics](https://simpleanalytics.com/)
  - [ ] google analytics
- [x] Support for tags - each unique tag will be its own page
- [ ] Support for multiple authors
- [x] Support for Pre-render
- [ ] Support for different Newsletter system
  - [ ] mailchimp
  - [ ] buttondown
  - [ ] convertkit
  - [ ] klaviyo
  - [ ] revue
  - [ ] emailoctopus
- [ ] og:image
- [ ] Netlify CMS
- [ ] Pagination
- [x] SEO friendly with RSS feed, sitemaps and more!

## Quick Start Guide

1. Try installing the starter using the new [Pliny project CLI](https://github.com/timlrx/pliny):

```bash
npm i -g @pliny/cli
pliny new --template=starter-blog my-blog
```

It supports the updated version of the blog with Contentlayer, optional choice of TS/JS and different package managers as well as more modularized components which will be the basis of the template going forward.

Alternatively to stick with the current version, TypeScript and Contentlayer:

```bash
npx degit 'timlrx/tailwind-nextjs-starter-blog#contentlayer'
```

or JS (official support)

```bash
npx degit https://github.com/timlrx/tailwind-nextjs-starter-blog.git
```

2. Personalize `siteMetadata.js` (site related information)
3. Modify the content security policy in `next.config.js` if you want to use
   any analytics provider or a commenting solution other than giscus.
4. Personalize `authors/default.md` (main author)
5. Modify `projectsData.js`
6. Modify `headerNavLinks.js` to customize navigation links
7. Add blog posts
8. Deploy on Vercel

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Extend / Customize

`data/siteMetadata.js` - contains most of the site related information which should be modified for a user's need.

`data/authors/default.md` - default author information (required). Additional authors can be added as files in `data/authors`.

`data/projectsData.js` - data used to generate styled card on the projects page.

`data/headerNavLinks.js` - navigation links.

`data/logo.svg` - replace with your own logo.

`data/blog` - replace with your own blog posts.

`public/static` - store assets such as images and favicons.

`tailwind.config.js` and `css/tailwind.css` - contain the tailwind stylesheet which can be modified to change the overall look and feel of the site.

`css/prism.css` - controls the styles associated with the code blocks. Feel free to customize it and use your preferred prismjs theme e.g. [prism themes](https://github.com/PrismJS/prism-themes).

`components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons use [heroicons](https://heroicons.com/).

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information.

`next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images etc. from other domains.

`og:image` - font directory is needed for and used in og:image

## Netlify CMS configuration

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Netlify / GitHub Pages / Firebase etc.**  
As the template uses `next/image` for image optimization, additional configurations have to be made to deploy on other popular static hosting websites like [Netlify](https://www.netlify.com/) or [GitHub Pages](https://pages.github.com/). An alternative image optimization provider such as Imgix, Cloudinary or Akamai has to be used. Alternatively, replace the `next/image` component with a standard `<img>` tag. See [`next/image` documentation](https://nextjs.org/docs/basic-features/image-optimization) for more details.

The API routes used in the newsletter component cannot be used in a static site export. You will need to use a form API endpoint provider and substitute the route in the newsletter component accordingly. Other hosting platforms such as Netlify also offer alternative solutions - please refer to their docs for more information.

## Support

Using the template? Support this effort by giving a star on GitHub, sharing your own blog and giving a shoutout on Twitter or becoming a project [sponsor](https://github.com/sponsors/timlrx).

## Licence

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/LICENSE) © [Timothy Lin](https://www.timlrx.com)
