<script>
	import { navLinks } from '$lib/config';

	let isOpen = false;

	function toggleDarkMode() {
		if (isOpen) {
			document.documentElement.style.overflow = 'auto';
			isOpen = false;
		} else {
			document.documentElement.style.overflow = 'hidden';
			isOpen = true;
		}
	}
</script>

<div class="sm:hidden">
	<button
		type="button"
		class="ml-1 mr-1 h-8 w-8 rounded py-1"
		aria-label="Toggle Menu"
		on:click={toggleDarkMode}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="text-gray-900 dark:text-gray-100"
		>
			<path
				fill-rule="evenodd"
				d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
	<div
		class="fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800"
		class:translate-x-0={isOpen}
		class:translate-x-full={!isOpen}
	>
		<div class="flex justify-end">
			<button
				type="button"
				class="mr-5 mt-11 h-8 w-8 rounded"
				aria-label="Toggle Menu"
				on:click={toggleDarkMode}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="text-gray-900 dark:text-gray-100"
				>
					<path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
		<nav class="fixed mt-8 h-full">
			{#each navLinks as link}
				<div class="px-12 py-4">
					<a
						href={link.href}
						class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
						on:click={toggleDarkMode}
					>
						{link.title}
					</a>
				</div>
			{/each}
		</nav>
	</div>
</div>
