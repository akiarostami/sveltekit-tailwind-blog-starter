<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<!-- <div class="min-h-screen h-full -mt-24 bg-white"> -->
<Blogs title="آخرین مقالات" h2 {posts} search={false} count={3} />
<!-- </div> -->
