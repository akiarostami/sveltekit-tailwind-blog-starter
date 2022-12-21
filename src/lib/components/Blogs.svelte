<script>
	import Tag from '$lib/components/Tag.svelte';
	import SearchBox from '$lib/components/SearchBox.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import { page } from '$app/stores';
	import fuzzySearch from '$utils/search.js';

	export let title = '';
	export let posts = [];
	export let tags = [];
	export let search = true;
	export let count = 0;

	if (count) {
		posts = posts.slice(0, count);
	}

	$: filter = $page.url.searchParams.get('query');
	$: currentPosts = filter ? fuzzySearch(posts, filter) : posts;
</script>

<h2 class="text-center mb-10">
	<span class="border-b border-gray-300 py-10">{title}</span>
</h2>

<div class="pl-4" class:border-l-2={search}>
	{#if search}
		<SearchBox />
	{/if}

	{#if tags.length}
		<div class="flex flex-wrap">
			{#each tags as tag}
				<div class="mr-5">
					<Tag text={tag.text} size="text-xs" />
					<a href={`/tags/${tag.slug}`} class="-ml-2 text-xs font-semibold uppercase text-gray-600">
						{` (${tag.count})`}
					</a>
				</div>
			{/each}
		</div>
	{/if}
</div>

{#if !currentPosts.length}
	No post found.
{:else}
	<ul class="divide-y divide-gray-200 ">
		{#each currentPosts as post}
			<li class="py-12">
				<Blog {post} summary={true} />
			</li>
		{/each}
	</ul>
{/if}
