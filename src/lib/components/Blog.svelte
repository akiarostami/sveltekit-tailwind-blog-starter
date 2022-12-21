<script>
	export let post;
	export let summary = false;

	import persianDate from '$utils/persianDate';
</script>

<div class="w-full">
	<article class="space-y-8">
		<div>
			{#if summary}
				<a href={`/${post.slug}`}>
					<h3 class="text-3xl md:text-5xl font-bold mb-4">
						{post.title}
					</h3>
					{#if post.subtitle}
						<h4 class="text-2xl md:text-3xl font-semibold mb-4">
							{post.subtitle}
						</h4>
					{/if}
				</a>
			{:else}
				<h2 class="text-3xl md:text-5xl font-bold mb-4">
					{post.title}
				</h2>
				{#if post.subtitle}
					<h3 class="text-2xl md:text-3xl font-semibold mb-4">
						{post.subtitle}
					</h3>
				{/if}
			{/if}
			<div class="text-sm text-gray-500 mb-8">
				توسط
				<a href={`/a/${post.author}`}>
					{post.author}
				</a>
				/
				{#each post.tags as tag}
					<a href={`/t/${tag}`}>
						{tag}&nbsp;
					</a>
				{/each}
				/ {persianDate(post.date)}
			</div>
		</div>

		<div class="prose max-w-none">
			{#if summary}
				{post.summary}
			{:else}
				{@html post.content}
			{/if}
		</div>

		{#if summary}
			<div>
				<a
					href={`${post.slug}`}
					class="bg-primary py-2 px-12 text-sm text-white hover:shadow-hover"
					aria-label={`Read "${post.title}"`}
				>
					خواندن مقاله
				</a>
			</div>
		{/if}
	</article>
</div>
