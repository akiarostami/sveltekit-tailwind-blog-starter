<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	let search = '';

	onMount(() => {
		search = $page.url.searchParams.get('query');
		if (search) {
			document.getElementById('search').focus();
		}
	});

	async function handleSubmit() {
		if (search && search.length) {
			goto(`/blog?query=${search}`, { keepFocus: true });
		} else {
			goto(`/blog`);
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="relative mb-2">
		<input
			bind:value={search}
			id="search"
			name="search"
			aria-label="Search posts"
			type="text"
			placeholder="Search posts"
			class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
		/>
		<svg
			class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width={2}
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	</div>
</form>
