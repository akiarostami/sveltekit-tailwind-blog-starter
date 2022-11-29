// used the following as a reference: https://geoffrich.net/posts/svelte-social-image/
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import Oswald from '$lib/fonts/Oswald-Bold.ttf';
import { html as toReactNode } from 'satori-html';
import OGTemplate from '$lib/OGTemplate.svelte';
import siteConfig from '$settings/siteConfig';

const width = siteConfig.og.width;
const height = siteConfig.og.height;

const template = `<h1>Test</h1>`;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
	const text = url.searchParams.get('text') ?? undefined;
	const result = OGTemplate.render({ text });
	const element = toReactNode(result.html);
	// const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);

	const svg = await satori(element, {
		fonts: [
			{
				name: 'Oswald',
				data: Buffer.from(Oswald),
				style: 'bold'
			}
		],
		height,
		width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
};
