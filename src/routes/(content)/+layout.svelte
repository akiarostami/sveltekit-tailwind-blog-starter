<script>
	export const prerender = true;

	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<main class="flex flex-col bg-white">
	<div
		class="shadow-main max-w-5xl mx-auto mt-0 md:-mt-24 bg-white text-black flex flex-col p-2 sm:p-6 md:p-24"
	>
		<slot />
	</div>
	<Footer />
</main>
