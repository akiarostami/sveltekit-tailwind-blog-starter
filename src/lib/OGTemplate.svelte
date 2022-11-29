<script>
	// can use to design: https://og-playground.vercel.app/
	export let text = 'Official Website';
	import siteConfig from '$settings/siteConfig';
	const height = siteConfig.og.height;
	const color = siteConfig.primaryColor;
	const barWidth = 140;
</script>

<div style="display:flex;height:100%;width:100%;background:white">
	<div style="left:0;top:0;bottom:0;width:{barWidth}px;position:absolute;display:flex;">
		<div
			style="display:flex;width:{height}px;justify-content:center;transform-origin:top left;transform:rotate(-90deg) translateX(-100%);border-bottom: 8px solid {color};padding:20px;"
		>
			<svg
				enable-background="new 0 0 100 100"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
				width="100px"
				height="100px"
				><path
					d="m1 62.9v2.4c0 18.5 15.2 33.7 33.8 33.7h30.3c18.7 0 33.9-15.2 33.9-33.7v-2.4c0-4.5-.9-8.9-2.6-12.9 1.7-4 2.6-8.3 2.6-12.9v-2.4c0-18.5-15.2-33.7-33.8-33.7h-30.4c-18.6 0-33.8 15.2-33.8 33.7v2.4"
					fill={color}
				/><path
					d="m84.9 35.9c0-11.7-9.6-21.2-21.3-21.2h-27.2c-11.7 0-21.3 9.6-21.3 21.2v28.2c0 11.7 9.6 21.2 21.3 21.2h27.1c11.7 0 21.3-9.6 21.3-21.2 0-5.4-2.1-10.3-5.4-14.1 3.4-3.7 5.5-8.7 5.5-14.1zm-14.3 28.9c0 3.4-2.8 6.1-6.2 6.1h-28.8c-3.4 0-6.2-2.8-6.2-6.1v-1.4c0-3.4 2.8-6.1 6.2-6.1h28.8c3.4 0 6.2 2.8 6.2 6.1zm0-28.2c0 3.4-2.8 6.1-6.2 6.1h-28.8c-3.4 0-6.2-2.8-6.2-6.1v-1.4c0-3.4 2.8-6.1 6.2-6.1h28.8c3.4 0 6.2 2.8 6.2 6.1z"
					fill="#fff"
				/></svg
			>
			<div style="font-size:80px;color:{color};font-weight:700;line-height:85%;margin-left:20px;">
				{siteConfig.headerTitle}
			</div>
		</div>
	</div>
	<div
		style="left:{barWidth}px;top:0;bottom:0;right:0;position:absolute;align-items:center;justify-content:center;margin:20px;font-size:70px;width:auto;text-align:center;background-color:white;color:black;line-height:1.4;line-height: 90%;text-transform:lowercase"
	>
		{text}
	</div>
</div>
