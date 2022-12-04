import siteConfig from '$settings/siteConfig.js';
import nav from '$settings/headerNavLinks.js';
import { posts } from '$lib/data/posts';

export const prerender = true;

const trimSlash = (str) => str.replace(/^\/|\/$/g, '');

export async function GET() {
	const pages = nav;
	const body = sitemap(posts, pages);

	return new Response(body, {
		headers: {
			'Cache-Control': `max-age=0, s-maxage=${3600}`,
			'Content-Type': 'application/xml'
		}
	});
}

const sitemap = (posts, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
    <url>
      <loc>${siteConfig.siteUrl}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    ${pages
			.map(
				(page) => `
    <url>
      <loc>${siteConfig.siteUrl}/${trimSlash(page.href)}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `
			)
			.join('')}
    ${posts
			.map((post) =>
				post.isPrivate
					? null
					: `
    <url>
      <loc>${siteConfig.siteUrl}/${post.slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `
			)
			.join('')}
  </urlset>`;
