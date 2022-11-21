<script>
	import siteMetadata from '$settings/siteMetadata.js';
	import formatDate from '$utils/formatDate';
	import Tag from '$lib/components/Tag.svelte';

	export let post;
	export let authors = [];
</script>

<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
	<article>
		<div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
			<header class="pt-6 xl:pb-6">
				<div class="space-y-1 text-center">
					<dl class="space-y-10">
						<div>
							<dt class="sr-only">Published on</dt>
							<dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
								<time dateTime={post.date}>
									{new Date(post.date).toLocaleDateString(siteMetadata.locale, {
										weekday: 'long',
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</time>
							</dd>
						</div>
					</dl>
					<div>
						<h1
							class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
						>
							{post.title}
						</h1>
					</div>
				</div>
			</header>
			<div
				class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
				style="grid-template-rows: auto 1fr;"
			>
				<dl class="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
					<dt class="sr-only">Authors</dt>
					<dd>
						<ul
							class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"
						>
							{#each authors as author}
								<li class="flex items-center space-x-2">
									{#if author.avatar}
										<img
											src={author.avatar}
											width="38px"
											height="38px"
											alt="avatar"
											class="h-10 w-10 rounded-full"
										/>
									{/if}
									<dl class="whitespace-nowrap text-sm font-medium leading-5">
										<dt class="sr-only">Name</dt>
										<dd class="text-gray-900 dark:text-gray-100">{author.name}</dd>
										<dt class="sr-only">Twitter</dt>
										<dd>
											{#if author.twitter}
												<a
													href={author.twitter}
													class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
												>
													{author.twitter.replace('https://twitter.com/', '@')}
												</a>
											{/if}
										</dd>
									</dl>
								</li>
							{/each}
						</ul>
					</dd>
				</dl>
				<div
					class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"
				>
					<div class="prose max-w-none pt-10 pb-8 dark:prose-dark">
						{@html post.content}
					</div>
					<div class="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
						<!-- <a href={"#"/*discussUrl(slug)*/} rel="nofollow"> -->
						<a href={'#'} rel="nofollow">
							{'Discuss on Twitter'}
						</a>
						{` • `}
						<!-- <a href={editUrl(fileName)}>{'View on GitHub'}</a> -->
					</div>
					<!-- <Comments {frontMatter} /> -->
				</div>
				<footer class="">
					<div
						class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y"
					>
						{#if post.tags}
							<div class="py-4 xl:py-8">
								<h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
									Tags
								</h2>
								<div class="flex flex-wrap">
									{#each post.tags as tag}
										<Tag text={tag} />
									{/each}
								</div>
							</div>
						{/if}
						{#if post.next || post.prev}
							<div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
								{#if post.prev}
									<div>
										<h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
											Previous Article
										</h2>
										<div
											class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
										>
											<a href={`/blog/${post.prev.slug}`}>{post.prev.title}</a>
										</div>
									</div>
								{/if}
								{#if post.next}
									<div>
										<h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
											Next Article
										</h2>
										<div
											class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
										>
											<a href={`/blog/${post.next.slug}`}>{post.next.title}</a>
										</div>
									</div>
								{/if}
							</div>
						{/if}
					</div>
					<div class="pt-4 xl:pt-8">
						<a
							href="/blog"
							class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
						>
							&larr; Back to the blog
						</a>
					</div>
				</footer>
			</div>
		</div>
	</article>
</div>
