<script>
	import Head from '$lib/components/layout/Head.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { config } from '$lib/config';
	import Title from '$lib/components/Title.svelte';
	import Logo from '$icons/logo.svelte';

	export let data;
	const authors = data.authors;
</script>

<Head title="About" />

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<Title title="درباره ما" />
	</div>
	<div class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
		<div class="flex flex-col items-center py-6">
			<Logo class="h-64 w-64" />
		</div>
		<div class="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
			<strong>«رو به رو»</strong> تلاش کوچکی است برای در دسترس قرار دادن مقالات مرتبط با مسائل روز ایران
			برای مخاطبین فارسی‌زبان.
		</div>
	</div>
	<div class="space-y-2 py-8 md:space-y-5">
		<Title h2 title="مترجمین" />
		<div class="grid xl:grid-cols-3 grid-cols-2 gap-4">
			{#each authors as author}
				<div class="lg:flex flex-row space-x-3">
					<!-- <div class="grow-0 shrink-0 basis-auto w-full lg:w-1/3">
						<img src={author.avatar} alt={author.name} class="w-full rounded-xl mb-4 lg:mb-0" />
					</div> -->
					<div class="grow-0 shrink-0 basis-auto w-full lg:w-2/3">
						<h5 class="text-lg font-bold mb-2">
							<a href={`/a/${author.slug}`}>{author.name}</a>
						</h5>
						<div class="flex">
							<SocialIcon small icon="instagram" url={author.instagram} />
							<SocialIcon small icon="twitter" url={author.twitter} />
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
