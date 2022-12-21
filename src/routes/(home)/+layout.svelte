<script>
	export const prerender = true;

	import Footer from '$lib/components/layout/Footer.svelte';
	import Splash from '$icons/splash.svelte';
</script>

<div class="flex flex-col items-center justify-center h-halfScreen mb-40">
	<Splash class="h-72 w-auto" />
	<span class="mt-8 font-bold text-3xl">مقالات ترجمه شده</span>
</div>

<main class="flex flex-col bg-white">
	<div
		class="shadow-main max-w-5xl mx-auto -mt-24 bg-white text-black flex flex-col p-2 sm:p-6 md:p-24"
	>
		<slot />
	</div>
	<Footer />
</main>
