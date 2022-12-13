<script>
	import { config, navLinks } from '$lib/config';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
</script>

<header class="flex items-center justify-between py-10">
	<div>
		<a href="/" aria-label={config.headerTitle}>
			<div class="flex items-center justify-between">
				<div class="mr-3">
					<img src="/logo.svg" alt="Logo" class="h-10 w-auto" />
				</div>
				<div class="hidden text-4xl font-semibold sm:block font-title">
					{config.headerTitle}
				</div>
			</div>
		</a>
	</div>
	<div class="flex items-center text-base leading-5">
		<div class="hidden sm:block">
			{#each navLinks as link}
				<a href={link.href} class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
					>{link.title}</a
				>
			{/each}
		</div>
		<ThemeSwitch />
		<MobileMenu />
	</div>
</header>
