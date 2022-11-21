<script>
	import Head from '$lib/Head.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Title from '$lib/components/Title.svelte';

	export let data;
	const tags = data.tags;
</script>

<Head title="Tags" />

<div
	class="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0"
>
	<div class="space-x-2 pt-6 pb-8 md:space-y-5">
		<div class="md:border-r-2 md:px-6">
			<Title title="Tags" />
		</div>
	</div>
	<div class="flex max-w-lg flex-wrap">
		{#if !tags.length}
			No tag found.
		{:else}
			{#each tags as tag}
				<div class="mt-2 mb-2 mr-5">
					<Tag text={tag.text} />
					<a
						href={`/tags/${tag.slug}`}
						class="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
					>
						{` (${tag.count})`}
					</a>
				</div>
			{/each}
		{/if}
	</div>
</div>
