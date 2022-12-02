<script>
	export let title = 'Title';
	export let subtitle = '';
	export let h2 = false;
	let selected = h2 ? 'h2' : 'h1';
</script>

{#if title}
	<svelte:element
		this={selected}
		class="{h2
			? 'text-2xl sm:text-3xl md:text-5xl'
			: 'text-3xl sm:text-4xl md:text-6xl'} font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14 capitalize"
	>
		{title}
	</svelte:element>
{/if}

{#if subtitle}
	<p class="text-lg leading-7 text-gray-700 dark:text-gray-400">
		{subtitle}
	</p>
{/if}
