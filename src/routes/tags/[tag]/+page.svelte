<script>
	import Head from '$lib/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
</script>

<Head title={data.tag} />

<Blogs title={data.tag} posts={data.posts} search={false} />
