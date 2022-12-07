<script>
	export const prerender = true;

	import Transition from '$lib/Transition.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Analytics from '$lib/components/analytics/index.svelte';
	import '../app.css';

	export let data = {};
</script>

<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
	<div class="flex h-screen flex-col justify-between">
		<Header />
		<main class="mb-auto">
			<Transition pathname={data?.pathname}>
				<slot />
			</Transition>
		</main>
		<Footer />
	</div>
</div>

<Analytics />
