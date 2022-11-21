<script>
	export const prerender = true;

	import siteMetadata from '$settings/siteMetadata.js';
	import headerNavLinks from '$settings/headerNavLinks.js';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import Transition from '$lib/Transition.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';

	export let data = {};
</script>

<!-- <Header /> -->

<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
	<div class="flex h-screen flex-col justify-between">
		<header class="flex items-center justify-between py-10">
			<div>
				<a href="/" aria-label={siteMetadata.headerTitle}>
					<div class="flex items-center justify-between">
						<div class="mr-3">
							<img src="/logo.svg" alt="Logo" class="h-10 w-auto" />
						</div>
						<div class="hidden h-6 text-2xl font-semibold sm:block">
							{siteMetadata.headerTitle}
						</div>
					</div>
				</a>
			</div>
			<div class="flex items-center text-base leading-5">
				<div class="hidden sm:block">
					{#each headerNavLinks as link}
						<a href={link.href} class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
							>{link.title}</a
						>
					{/each}
				</div>
				<ThemeSwitch />
				<MobileMenu />
			</div>
		</header>
		<main class="mb-auto">
			<Transition pathname={data?.pathname}>
				<slot />
			</Transition>
		</main>
		<Footer />
	</div>
</div>

<!-- <main id="content" class="min-h-screen">
		<slot />
</main> -->
