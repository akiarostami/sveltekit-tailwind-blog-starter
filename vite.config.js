import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';
import fs from 'fs';

const svgPluginOptions = {
	svgoOptions: {
		plugins: [
			{
				name: 'preset-default',
				params: {
					overrides: {
						removeViewBox: false
					}
				}
			},
			'removeDimensions'
		]
	}
};

/** @type {import('vite').UserConfig} */
const config = {
	resolve: {
		alias: {
			$icons: path.resolve('./src/icons'),
			$utils: path.resolve('./src/utils')
		}
	},
	plugins: [sveltekit(), svg(svgPluginOptions), rawFonts(['.ttf'])],
	legacy: { buildSsrCjsExternalHeuristics: true }
};

function rawFonts(ext) {
	return {
		name: 'vite-plugin-raw-fonts',
		transform(code, id) {
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return { code: `export default ${JSON.stringify(buffer)}`, map: null };
			}
		}
	};
}

export default config;
