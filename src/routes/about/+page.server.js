import { getEntries } from '$lib/data/entries.js';

const authors = getEntries('authors');

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		// eslint-disable-next-line no-unused-vars
		authors: authors
	};
}
