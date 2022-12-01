<script>
	import siteConfig from '$settings/siteConfig.js';
	import Head from '$lib/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<div class="pt-12">
	<h1
		class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
	>
		Welcome to my blog!
	</h1>
	<h1>Test</h1>
	<h2 class="text-xl prose-xl text-gray-600 dark:text-gray-400">
		Here's where I share my thoughts and my notes with the world, as well as all interesting things
		I find online. To get the updates, please check this site often, or subscribe to my RSS feed.
	</h2>
</div>

<Blogs title="Latest" h2={true} subtitle={siteConfig.description} {posts} search={false} />
