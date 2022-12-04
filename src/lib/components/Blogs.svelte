<script>
	import formatDate from '$utils/formatDate';
	import Tag from '$lib/components/Tag.svelte';
	import Title from '$lib/components/Title.svelte';

	export let title = '';
	export let subtitle = '';
	export let posts = [];
	export let tags = [];
	export let more = true;
	export let search = true;
	export let h2 = false;
	export let count = 0;

	if (count) {
		posts = posts.slice(0, count);
	}
</script>

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<div class="grid lg:grid-cols-2 gap-4">
			<div>
				<Title {title} {subtitle} {h2} />
			</div>

			<div class="pl-4" class:border-l-2={search}>
				{#if search}
					<div class="relative mb-2">
						<input
							aria-label="Search posts"
							type="text"
							placeholder="Search posts"
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

				{#if tags.length}
					<div class="flex flex-wrap">
						{#each tags as tag}
							<div class="mr-5">
								<Tag text={tag.text} size="text-xs" />
								<a
									href={`/tags/${tag.slug}`}
									class="-ml-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-300"
								>
									{` (${tag.count})`}
								</a>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
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
								<dt class="sr-only">Published by</dt>
								<dd class="text-base font-bold leading-6 text-gray-600 dark:text-gray-300">
									<time dateTime={post.date}>{post.author}</time>
								</dd>
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
