<h1 align="center">
  <br>
  <a href="https://github.com/akiarostami/sveltekit-tailwind-blog-starter"><img src="static/logo.png" alt="Sveltekit Tailwind Blog Starter" width="200"></a>
  <br>
  Sveltekit Tailwind Blog Starter
  <br>
</h1>

<h4 align="center">An easily configurable and customizable blog starter for <a href="https://kit.svelte.dev" target="_blank">SvelteKit</a> + <a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a>.</h4>

<p align="center">
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/akiarostami/sveltekit-tailwind-blog-starter">
  <img alt="Built with Sveltekit" src="https://img.shields.io/badge/sveltekit-v1-ff4000"/>
  <img alt="Built with Tailwind" src="https://img.shields.io/badge/Tailwind CSS-v3-0ea5e9"/>
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/akiarostami/sveltekit-tailwind-blog-starter">
  <img alt="MIT License" src="https://img.shields.io/github/license/akiarostami/sveltekit-tailwind-blog-starter">
  <a href="https://saythanks.io/to/akiarostami">
      <img src="https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#deploy">Deploy</a> •
  <a href="#managing-the-content">Managing the Content</a> •
  <a href="#credits">Credits</a> •
  <a href="#support">Support</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://repository-images.githubusercontent.com/568981651/e6608d38-83e4-42b0-9733-098e94198911)

## About Sveltekit Tailwind Blog Starter

I've been looking for a good, flexible template for [SvelteKit](https://kit.svelte.dev/) / [Tailwind CSS](https://tailwindcss.com/), but all the templates I found were either too simple, missing some needed features, or were too difficult to customize (or both). I loved [Timothy Lin](https://github.com/timlrx/)'s simple but feature-rich [Tailwind Nextjs Started Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog), so I decided to port that to SvelteKit, and add a few things I needed, including [Netlify CMS](https://www.netlifycms.org/), dynamic [Open Graph](https://ogp.me/) image (og:image) support.

This is my first attempt to write something in SvelteKit. **Most probably, I won't be maintaining this template much, and won't be adding features to it.** Feel free to grab a copy and use it as you wish.

## Key Features

- [x] Written for [SvelteKit](https://kit.svelte.dev/) (latest RC version)
- [x] Easy style customization with [Tailwind 3](https://tailwindcss.com/)
- [x] Great lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/221212_BiDc65_FQC/)
- [x] Mobile-friendly view
- [x] Blog posts
- [x] Static pages (projects)
- [x] Single or Multiple authors
- [x] Markdown
- [x] Markdown components
  - [x] External Links
  - [x] YouTube Video
- [x] Support for light and dark theme
- [x] Netlify CMS
- [x] Search
- [x] Blog post tags, and tag filtering
- [x] Support for Pre-render
- [x] OpenGraph Information
- [x] SEO-friendly with RSS feed, sitemaps, and Open Graph support
- [x] Open Gram Image (og:image)
- [x] Analytics:
  - [x] Supports [Google Analytics](https://analytics.google.com/analytics/web/)
  - [x] Supports [plausible](https://plausible.io/)
  - [x] Supports [simple analytics](https://simpleanalytics.com/)
- [x] Newsletter / Mailing List
  - [x] Supports [Mailchimp](https://mailchimp.com/)
  - [x] Supports [Buttondown](https://buttondown.email/)
  - [x] Supports [Convertkit](https://convertkit.com/)
  - [x] Supports [Klaviyo](https://www.klaviyo.com/)
  - [x] Supports [Revue](https://www.aweber.com/)
  - [x] Supports [Emailoctopus](https://emailoctopus.com/)
- [x] Discussion / Commenting
  - [x] Supports [giscus](https://giscus.app/)
  - [x] Supports [utterances](https://utteranc.es/)
- [ ] Pagination

## How To Use

In order to use this template, you need to know the basics of [SvelteKit](https://kit.svelte.dev/) + [Tailwind CSS](https://tailwindcss.com/). Below is a quick note on how to install this, and where to look for changes and customizations.

### Installation

```bash
# Clone this repository
$ git clone https://github.com/akiarostami/sveltekit-tailwind-blog-starter

# Go into the repository
$ cd sveltekit-tailwind-blog-starter

# Install dependencies
$ npm install

# Run the app
$ npm start
```

### Customization

- `tailwind.config.cjs` and `src/app.css` contain the tailwind stylesheet and the default css settings which can be modified to change the overall look and feel of the site.
- All tailwind settings and configurations are available in `tailwind.config.cjs`
- Site-specific basic css settings are available in `src/app.css`
- All site-related settings, navigation, analytics, mailing list, and commenting system settings are in `src/lib/config.js`
- Mailing list keys should be set in environment variables. Find the name of the environment variables in `.env.example`
- `Pre-rendering` is ON for all pages by default. You can change that from `/src/routes/+layout.svelte` file by changing setting `export const prerender = false;`.
- `sr/lib/config.js` - contains most of the site related information which should be modified for a user's need.
- All contents (_Blog Posts_, _Projects_, and _Authors_) are stored under the `content` folder.
- All blog and project images are stored under the `static/img` folder.
- Top navigation menu can be customized in the `config.js` file.
- By default _Multi User_ feature is on, and each _author_ should have a profile file in `content/authors` folder. If you only have one user for your blog, you can set `multiuser: false` in the `config.js` file, and set the admin user into in the same file in the `user` section.
- Remember to replace `static/logo.svg`, `static/logo.png`, `static/favicon.ico`, and `static/icon-xxx.png` with your own logo.
- `routes`: read the [SvelteKit documentation](https://kit.svelte.dev/docs) for all routing information.
- Site fonts are included in `app.html` and linked from [Google Fonts](https://fonts.google.com), and set in tailwind's config file. For a better site performance and ranking consider hosting your own fonts.
- Please note that Open Graph Image (og:image) needs a local copy of the fonts, which are available under `src/lib/fonts`.
- Standard `markdown` is supported in all blog posts and project pages. Markdown configurations are set in `mdsvex.config.js` file.
- Both [`rehype`](https://github.com/rehypejs/rehype) and [`remark`](https://remark.js.org/) Plugins can be used to extend the formatting.
- Two markdown plugins are added by default:
  - [`rehype-external-links`](https://github.com/rehypejs/rehype-external-links) to open all content links in a new tab
  - A custom plugin was made to show how to make custom plugins: the following tag can be used to add a formatted YouTube videos using this format: [`<youtube id="dQw4w9WgXcQ" title="The Best Cat Video Ever" />`](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

## Deploy

Follow [Netlify's Documentation](https://docs.netlify.com/integrations/frameworks/sveltekit/) to deploy your site on [Netlify](https://netlify.com), or [Vercel's Documentation](https://vercel.com/guides/deploying-svelte-with-vercel) to deploy on [Vercel Platform](https://vercel.com)

## Managing the Content

As mentioned before, all content files (Blog Posts, Author Information, and Projects) are saved under the `content` folder. These content types can simply be modified / extended / removed, and other content types can be added. For that, you can simply modify / add / remove markdown files in these folders.

[Netlify CMS](https://www.netlifycms.org/) is not required for editing the content, but it would make life much easier. After setting up Netlify CMS, you can simply use `yoursite.com/admin` to manage all your content from a simple web UI. Adding Netlify CMS is as easy as adding a couple of static files to your website. You can find these files under `static/admin`, and can access the web interface from `https://yoursite.com/admin`. You can simply delete this folder if you're not using Netlify CMS.

### How to install Netlify CMS

After deploying your site on Netlify:

- Go to Site `Settings` > `Identity`
- Enable Identity
- Under the `Services` section of that page, enable [`Git Gateway`](https://docs.netlify.com/visitor-access/git-gateway/#setup-and-settings)
- Make user registration _Invitation Only_ from `Settings` > `Registration` > `Invite Only`
- Invite yourself from `Settings` > `Identity` > `Invite User`
- After you receive the invitation email, click on `Accept the Invite`. It takes you to your site to a broken link. Add "/admin" to the domain and before "#invite_token"
- Set your password

You're all set, and can access your site admin from `yousite.com/admin`. You can also invite more users and editors from the same page (`Settings` > `Identity` > `Invite User`);

## Credits

Beside all the open-source packages used for this starter, I used or were inspired by the following:

- [Timothy Lin](https://github.com/timlrx/)'s [Tailwind Nextjs Started Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)
- Geoff Rich's [Creative dynamic social card images with Svelte components](https://geoffrich.net/posts/svelte-social-image/)
- [Ryan Filler](https://www.ryanfiller.com/)'s [Site](https://github.com/ryanfiller/portfolio-svelte)

- and of course, HBO's [Silicon Valley](https://www.hbo.com/silicon-valley)

## Support

Support this template and effort by giving it a star on GitHub, sharing your own blog, and giving a shout-out on [Twitter](https://twitter.com/akiarostami).

## License

[MIT](https://github.com/akiarostami/sveltekit-tailwind-blog-starter/blob/master/LICENSE) © [Ahmad Kiarostami](https://www.ahmadkiarostami.com)

---

> @akiarostami on
> [GitHub](https://github.com/akiarostami) &nbsp;&middot;&nbsp; > [Twitter](https://twitter.com/akiarostami) &nbsp;&middot;&nbsp; > [Instagram](https://instagram.com/akiarostami) &nbsp;&middot;&nbsp; > [Web](https://www.ahmadkiarostami.com)
