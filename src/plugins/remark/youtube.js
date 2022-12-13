import { visit } from 'unist-util-visit';
import getAttr from '../getAttr.js';

export default function youtube() {
	return (tree) => {
		visit(tree, (node) => {
			if (!node.value?.startsWith('<youtube ')) return node;

			let id = getAttr(node.value, 'youtube', 'id');
			let title = getAttr(node.value, 'youtube', 'title');

			node.value = `<iframe title="${title}" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen width="747" height="420" />`;
			return node;
		});
	};
}
