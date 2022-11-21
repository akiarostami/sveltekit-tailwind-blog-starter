// used the following as a reference: https://geoffrich.net/posts/svelte-social-image/
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import Oswald from '$lib/fonts/Oswald-Bold.ttf';
import { html as toReactNode } from 'satori-html';
import OGImage from '$lib/OGImage.svelte';

const width = 1200;
const height = 630;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
	const message = url.searchParams.get('message') ?? undefined;
	const result = OGImage.render({ message });
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
