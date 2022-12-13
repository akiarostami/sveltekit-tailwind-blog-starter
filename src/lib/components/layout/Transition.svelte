<script>
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fly={{ x: -5, duration: 500, delay: 500 }}>
		<slot />
	</div>
{/key}
