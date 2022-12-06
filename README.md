# Tailwind SvelteKit Starter Blog

This is a [SvelteKit](https://kit.svelte.dev/) + [Tailwind CSS](https://tailwindcss.com/) blogging starter template with markdown support and easily configurable and customizable. It is inspired by [Timothy Lin](https://github.com/timlrx/)'s [Tailwind Nextjs Started Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog), plus (and minus) some features. Most important added features to Timothy's template are og:image and [Netlify CMS](https://www.netlifycms.org/) support with a minimal configuration.

I've been looking for a good, flexible template for SvelteKit / Tailwind, but all templates I found were either too simple and didn't have some needed features, or were too difficult to customize (or both). I loved Timothy Lin's simple but feature-rich template for Next.js, so I decided to port that to SvelteKit, and add a couple of things I needed: [Netlify CMS](https://www.netlifycms.org/) and dynamic og:image.

This is my first attempt to write something in SvelteKit. Most probably, I won't be maintaining this template much, and won't be adding features to it. Feel free to grab a copy and use it as you wish.

## Features

- [x] Full support of [SvelteKit](https://kit.svelte.dev/) (latest RC version)
- [x] Easy style customization with [Tailwind 3](https://tailwindcss.com/)
- [x] Great lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/210111_DiC1_08f3670c3430bf4a9b76fc3b927716c5/)
- [x] Mobile-friendly view
- [x] Blog posts and projects
- [x] Multiple authors
- [x] Markdown
- [x] Support for Light and dark theme
- [x] Support for tags - each unique tag will be its own page
- [x] Support for Pre-render
- [x] og:image
- [x] SEO friendly with RSS feed, sitemaps and more!
- [ ] Markdown components
  - [ ] Links
  - [ ] Video
  - [ ] Image
- [x] Supports for different analytics systems
  - [x] [google analytics](https://analytics.google.com/analytics/web/)
  - [x] [plausible](https://plausible.io/)
  - [x] [simple analytics](https://simpleanalytics.com/)
- [ ] Support for different Newsletter systems
  - [ ] mailchimp
  - [ ] buttondown
  - [ ] convertkit
  - [ ] klaviyo
  - [ ] revue
  - [ ] emailoctopus
- [ ] Support for different discussion / comment systems
  - [ ] giscus
  - [ ] utterances
  - [ ] disqus
- [x] Netlify CMS
- [ ] Pagination
- [ ] Search (perhaps using one of [these libraries](https://github.com/leeoniya/uFuzzy#user-content-benchmark))
- [ ] SEO OpenGraph Info

## Installation & Customization

I assume you are familiar with [SvelteKit](https://kit.svelte.dev/) + [Tailwind CSS](https://tailwindcss.com/). Source files should be simple enough for all editing and customizations. Below is a quick note on how to install this, and where to look for changes and customizations.

### Installation

```bash
npx degit https://github.com/akiarostami/sveltekit-tailwind-blog-starter
npm install
npm run dev
```

### Customization

- Customize `tailwind.config.cjs` for all tailwind settings and configurations
- Customize `siteConfig.js` for all site-related settings
- Modify `headerNavLinks.js` to customize navigation links
- SSR - by default it's ON.
- `src/settings/siteConfig.js` - contains most of the site related information which should be modified for a user's need.
- `src/settings/authors/default.md` - default author information (required). Additional authors can be added as files in `data/authors`.
- `src/settings/projectsData.js` - data used to generate styled card on the projects page.
- `src/settings/headerNavLinks.js` - navigation links.
- `content/posts`, `content/authors`, `content/projects` - replace with your own blog posts, authors, and projects.
- `static/img` - folder used for storing and serving images
- `static/logo.svg`, `static/favicon.ico`, `static/icon-xxx.png` - replace with your own logo.
- `tailwind.config.cjs` and `src/settings/base.css` - contain the tailwind stylesheet which can be modified to change the overall look and feel of the site.
- `components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.
- `layouts` - main templates used in pages.
- `routes` - pages to route to. Read the [SvelteKit documentation](https://kit.svelte.dev/docs) for more information.
- `fonts` - Fonts from Google Fonts are included in `app.html`, and set in tailwind's config file. Please note that Open Graph Image (og:image) needs a local copy of the fonts, which are available under `src/lib/fonts`.

### Managing the Content

All content files (Blog Posts, Author Information, and Projects) are saved under the `content` folder. You can simply add other content types. You can simply modify / add / remove markdown files in these folders. [Netlify CMS](https://www.netlifycms.org/) is not required for editing the content, but it would make your life much easier. After setting up Netlify CMS, you can simply use yoursite.com/admin to manage all your content.

## Netlify CMS configuration

- Go to Site Settings > Identity
- Enable Identity
- Settings > Registration > Invite Only
- Go to Settings > Identity. In Services section enable [Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/#setup-and-settings)
- Identity > Invite User
- Receive the invitation email, click on Accept the Invite, then add "/admin" to the domain and before "#invite_token"
- Set your password
  To be added

## Deploy

**Netlify**
Add useful information here to deploy on [Netlify Platform](https://netlify.com) (Check out the [Netlify's Documentation](https://docs.netlify.com/integrations/frameworks/sveltekit/) on deploying SvelteKit sites on Netlify).

**Vercel**  
Add useful information here to deploy on [Vercel Platform](https://vercel.com) (Check out [Vercel's Documentation](https://vercel.com/guides/deploying-svelte-with-vercel) on deploying SvelteKit sites on Vercel).

## Support

Support this template and effort by giving it a star on GitHub, sharing your own blog, and giving a shout-out on [Twitter](https://twitter.com/akiarostami).

## License

[MIT](https://github.com/akiarostami/sveltekit-tailwind-blog-starter/blob/master/LICENSE) © [Ahmad Kiarostami](https://www.ahmadkiarostami.com)
