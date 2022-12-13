<script>
	// can use to design: https://og-playground.vercel.app/
	export let text = 'Official Website';
	import { config, openGraph } from '$lib/config';
	const height = openGraph.height;
	const color = config.primaryColor;
	const barWidth = 140;
</script>

<div style="display:flex;height:100%;width:100%;background:white">
	<div style="left:0;top:0;bottom:0;width:{barWidth}px;position:absolute;display:flex;">
		<div
			style="display:flex;background:#064e3b;width:{height}px;justify-content:center;transform-origin:top left;transform:rotate(-90deg) translateX(-100%);border-bottom: 8px solid {color};padding:20px;"
		>
			<svg
				enable-background="new 0 0 512 512"
				viewBox="0 0 512 512"
				width="100px"
				height="100px"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="m58.852 423.328-32.851 61.799.821-336.709c0-67.651 54.613-122.366 122.365-122.366h335.889c-95.469 29.668-194.943 96.702-260.643 173.078-72.474 83.559-113.639 141.047-165.581 224.198"
					fill="#047863"
				/><path
					d="m485.896 26.052s-146.591 68.574-191.35 171.538c-23.815 55.023-29.666 121.235-72.886 162.812-29.667 28.537-71.653 39.215-108.095 57.795-23.816 12.318-68.164 41.576-87.155 67.752h337.12c67.753 0 122.468-54.717 122.468-122.366-.102-.001-.102-337.531-.102-337.531z"
					fill="#06a261"
				/></svg
			>

			<div style="font-size:80px;color:{color};font-weight:800;line-height:85%;margin-left:20px;">
				{config.headerTitle}
			</div>
		</div>
	</div>
	<div
		style="left:{barWidth}px;top:0;bottom:0;right:0;position:absolute;align-items:center;justify-content:center;margin:20px;font-size:80px;width:auto;text-align:center;background-color:white;color:black;line-height:1.4;line-height: 90%;font-family:'Open Sans',sans-serif;"
	>
		{text}
	</div>
</div>
