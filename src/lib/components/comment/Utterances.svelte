<script>
	import { onMount } from 'svelte';
	import { isDarkMode } from '$utils/theme';

	export let config = {};

	let theme = isDarkMode() ? config.darkTheme : config.theme;

	onMount(() => {
		const utterances = document.createElement('script');
		utterances.src = 'https://utteranc.es/client.js';
		utterances.setAttribute('repo', config.repo);
		utterances.setAttribute('issue-term', config.issueTerm ?? 'pathname');
		utterances.setAttribute('label', config.label ?? '');
		utterances.setAttribute('theme', theme ?? 'preferred-color-scheme');
		utterances.setAttribute('crossorigin', 'anonymous');
		utterances.setAttribute('async', 'true');

		setTimeout(() => {
			const observer = new MutationObserver(() => {
				document.getElementById('utterances-loading')?.remove();
				observer.disconnect();
			});

			const eUtterances = document.getElementById('utterances');
			if (eUtterances) {
				observer.observe(eUtterances, { childList: true });
			}

			document.getElementById('utterances-container')?.appendChild(utterances);
		}, 1000);
	});
</script>

<div id="utterances-container">
	<div id="utterances-loading" class="flex flex-col items-center">
		<h4>Loading Utternaces Discussion</h4>
	</div>
	<div id="utterances" class="utterances-frame relative" />
</div>
