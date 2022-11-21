import { slug } from 'github-slugger';
import { getEntries } from './entries.js';
export const posts = getEntries('posts');

export async function getAllTags() {
	let tags = posts
		.flatMap(({ tags }) => tags)
		.map((tag) => ({ text: tag, slug: slug(tag) }))
		.reduce((arr, tag) => {
			let index = arr.findIndex((t) => t.slug === tag.slug);
			if (index > -1) arr[index].count++;
			else arr.push({ text: tag.text, slug: tag.slug, count: 1 });
			return arr;
		}, [])
		.sort((a, b) => (b.text < a.text ? 1 : -1));

	return tags;
}

export const tags = getAllTags();
