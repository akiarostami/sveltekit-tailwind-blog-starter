<script>
	import formatDate from '$utils/formatDate';
	import Tag from '$lib/components/Tag.svelte';
	import Title from '$lib/components/Title.svelte';

	export let title = '';
	export let subtitle = '';
	export let posts = [];
	export let more = true;
	export let search = true;
	export let h2 = false;
</script>

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<Title {title} {subtitle} {h2} />

		{#if search}
			<div class="relative max-w-lg">
				<input
					aria-label="Search articles"
					type="text"
					placeholder="Search articles"
					class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
				/>
				<svg
					class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width={2}
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</div>
		{/if}
	</div>
	{#if !posts.length}
		No post found.
	{:else}
		<ul>
			{#each posts as post}
				<li class="py-12">
					<article>
						<div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
							<dl>
								<dt class="sr-only">Published on</dt>
								<dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
									<time dateTime={post.date}>{formatDate(post.date)}</time>
								</dd>
							</dl>
							<div class="space-y-5 xl:col-span-3">
								<div class="space-y-6">
									<div>
										<h2 class="text-2xl font-bold leading-8 tracking-tight">
											<a href={`/blog/${post.slug}`} class="text-gray-900 dark:text-gray-100">
												{post.title}
											</a>
										</h2>
										<div class="flex flex-wrap">
											{#each post.tags as tag}
												<Tag text={tag} />
											{/each}
										</div>
									</div>
									<div class="prose max-w-none text-gray-500 dark:text-gray-400">
										{post.summary}
									</div>
								</div>
								{#if more}
									<div class="text-base font-medium leading-6">
										<a
											href={`/blog/${post.slug}`}
											class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
											aria-label={`Read "${post.title}"`}
										>
											Read more &rarr;
										</a>
									</div>
								{/if}
							</div>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	{/if}
</div>
