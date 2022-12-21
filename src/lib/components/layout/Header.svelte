<script>
	import { config } from '$lib/config';
	import Home from '$icons/home.svelte';
	import Header from '$icons/header.svelte';
</script>

<header class="p-6">
	<div class="max-w-5xl items-center w-full mx-auto flex justify-between text-white font-bold">
		<div>
			<a href="/" aria-label={config.headerTitle}>
				<Header class="h-9 w-auto text-white" />
			</a>
		</div>
		<div class="flex items-center">
			<a href="/" aria-label={config.headerTitle}>
				<Home class="h-6 w-6 text-white" />
			</a>
		</div>
	</div>
</header>
