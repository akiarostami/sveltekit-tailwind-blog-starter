<script>
	import { page } from '$app/stores';
</script>

<div class="pt-64 mx-auto w-64 text-center">
	{#if $page.status === 404}
		<h1 class="text-9xl font-bold text-outline">404</h1>
		<p class="text-2xl font-semibold">Page not found</p>
	{:else}
		<h1 class="text-9xl font-bold">Error</h1>
		<p class="text-2xl font-semibold">Something went wrong</p>
	{/if}
	<div class="pt-10">
		<a href="/" class="text-xl font-semibold border py-2 px-6 rounded-lg">Go Back Home</a>
	</div>
</div>
