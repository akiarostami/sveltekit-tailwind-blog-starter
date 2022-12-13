// used the following as a reference: https://geoffrich.net/posts/svelte-social-image/
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import Saira from '$lib/fonts/Saira-ExtraBold.ttf';
import OpenSans from '$lib/fonts/OpenSans-ExtraBold.ttf';
import { html as toReactNode } from 'satori-html';
import OGTemplate from '$lib/components/OGTemplate.svelte';
import { openGraph } from '$lib/config';

const width = openGraph.width;
const height = openGraph.height;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
	const text = url.searchParams.get('text') ?? undefined;
	const result = OGTemplate.render({ text });
	const element = toReactNode(result.html);
	// const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);

	const svg = await satori(element, {
		fonts: [
			{ name: 'Saira', data: Buffer.from(Saira), style: 'bold' },
			{ name: 'Open Sans', data: Buffer.from(OpenSans), style: 'bold' }
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
