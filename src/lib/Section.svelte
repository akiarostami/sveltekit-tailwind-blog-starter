<script>
	export let title = '';
</script>

<div class="container mx-auto my-20 grid grid-col-1 md:grid-cols-4 items-start">
	<h2 class="">{title}</h2>
	<div class="col-span-3 mt-1"><slot /></div>
</div>
