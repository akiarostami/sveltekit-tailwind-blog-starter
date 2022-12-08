<script>
	import { onMount } from 'svelte';

	export let config = {};

	onMount(() => {
		const giscus = document.createElement('script');
		giscus.src = 'https://giscus.app/client.js';
		giscus.setAttribute('data-repo', config.repo);
		giscus.setAttribute('data-repo-id', config.repoId);
		giscus.setAttribute('data-category', config.category ?? '');
		giscus.setAttribute('data-category-id', config.categoryId);
		giscus.setAttribute('data-mapping', config.mapping);
		giscus.setAttribute('data-reactions-enabled', config.reactionsEnabled);
		giscus.setAttribute('data-input-position', config.inputPosition ?? 'bottom');
		giscus.setAttribute('data-theme', config.theme ?? 'preferred_color_scheme');
		giscus.setAttribute('data-lang', config.lang ?? 'en');
		giscus.setAttribute('data-loading', config.loading ?? '');
		giscus.setAttribute('data-strict', config.dataStrict ?? '0');
		giscus.setAttribute('crossorigin', 'anonymous');
		giscus.setAttribute('async', 'true');

		setTimeout(() => {
			const observer = new MutationObserver(() => {
				document.getElementById('giscus-loading')?.remove();
				observer.disconnect();
			});

			const eGiscus = document.getElementById('giscus');
			if (eGiscus) {
				observer.observe(eGiscus, { childList: true });
			}

			document.getElementById('giscus-container')?.appendChild(giscus);
		}, 1000);
	});
</script>

<div id="giscus-container">
	<div id="giscus-loading" class="flex flex-col items-center">
		<h4>Loading Giscus Discussion</h4>
	</div>
	<div id="giscus" class="giscus" />
</div>
