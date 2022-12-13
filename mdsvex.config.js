import remarkPlugins from './src/plugins/remark/index.js';
import rehypePlugins from './src/plugins/rehype/index.js';
import rehypeExternalLinks from 'rehype-external-links';

export default {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [...Object.values(remarkPlugins)],
	rehypePlugins: [
		[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		...Object.values(rehypePlugins)
	]
};
