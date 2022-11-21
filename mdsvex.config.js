// import path from 'path';
import { visit } from 'unist-util-visit';
// import autolinkHeadings from 'rehype-autolink-headings';
// import slugPlugin from 'rehype-slug';
import relativeImages from 'mdsvex-relative-images';
import urls from 'rehype-urls';

function processUrl(url, node) {
	if (node.tagName === 'a') {
		node.properties.class = 'text-link';

		if (!url.href.startsWith('/')) {
			// Open external links in new tab
			node.properties.target = '_blank';
			// Fix a security concern with offsite links
			// See: https://web.dev/external-anchors-use-rel-noopener/
			node.properties.rel = 'noreferrer';
		}
	}
}

export default {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [videos, relativeImages],
	rehypePlugins: [
		[urls, processUrl] // adds rel and target to <a> elements
	]
};

/**
 * Adds support to video files in markdown image links
 */
function videos() {
	const extensions = ['mp4', 'webm'];
	return function transformer(tree) {
		visit(tree, 'image', (node) => {
			if (extensions.some((ext) => node.url.endsWith(ext))) {
				node.type = 'html';
				node.value = `
            <video 
              src="${node.url}"
              autoplay
              muted
              playsinline
              loop
              title="${node.alt}"
            />
          `;
			}
		});
	};
}

/**
 * Adds support to youtube links in markdown image links
 */
// function youtube() {
// 	return function transformer(tree) {
// 		visit(tree, 'image', (node) => {
// 			if (node.url.includes('youtu')) {
// 				let url = node.url;
// 				let id = url.includes('watch?v=') ? url.split('v=').pop() : url.split('/')?.pop();
// 				node.type = 'html';
// 				console.log('NODE >>>', node);
// 				node.value = `
// 					<span style="
// 					position: relative;
// 					width: 100%;
// 					padding-top: 56.25%;"
// 				><iframe width="560" height="315" title="${node.alt}" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="
// 				position: absolute;
// 				top: 0;
// 				left: 0;
// 				width: 100%;
// 				height: 100%;
// 			">
// 						">Video</iframe></span>
// 				`;
// 			}
// 		});
// 	};
// }
