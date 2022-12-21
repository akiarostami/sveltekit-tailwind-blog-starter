<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<div class="pt-12">
	<h1
		class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
	>
		Welcome to Pied Piper!
	</h1>
	<p class="text-xl prose-xl text-gray-800 dark:text-gray-400">
		This is Pied Piper's (un)official blog. Amoung many other things, Pied Piper offers a middle-out
		compression solution making data storage problems smaller. To get the updates, please check this
		site often, or subscribe to our RSS feed.
	</p>
</div>

<Blogs title="Latest Posts" h2 {posts} search={false} count={3} />
