export const getMetadata = (filepath, entry) => {
	return {
		...entry.metadata,

		content: entry.default.render().html,

		// generate the slug from the file path
		slug: filepath
			.replace(/(\/index)?\.md/, '')
			.split('/')
			.pop(),

		// twitter: entry.metadata.twitter
		// 	? entry.metadata.twitter.replace(/(http(s)?:\/\/)?((w){3}.)?twitter\.com\/?/, '')
		// 	: null,
		youtube: entry.metadata.video
			? entry.metadata.video.replace(
					/(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)(\.com)?\/(watch\?v=)?/,
					''
			  )
			: null,

		tag: entry.metadata.type?.split(' ').shift().toLowerCase() || null,
		tags: entry.metadata.tags || []

		// whether or not this file is `my-post.md` or `my-post/index.md`
		// (needed to do correct dynamic import in posts/[slug].svelte)
		// isIndexFile: filepath.endsWith('/index.md')
	};
};
