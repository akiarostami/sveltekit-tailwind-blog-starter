<script>
	export const prerender = true;

	import Header from '$lib/components/layout/Header.svelte';
	import Transition from '$lib/components/layout/Transition.svelte';
	import Analytics from '$lib/components/analytics/index.svelte';
	import '../app.css';

	export let data = {};
</script>

<div class="bg-primary bg-gradient-to-b from-primary to-blue-900 h-full text-white w-full">
	<Header />
	<div class="mb-12 md:mb-40" />

	<Transition pathname={data?.pathname}>
		<slot />
	</Transition>
</div>

<Analytics />
