<script>
	export let src;
	export let name;
	export let className = '';
</script>

<div class="mr-8">
	<div>
		<img
			class={`object-cover border-gray-100 border-2 rounded-full ${className}`}
			{src}
			width="80"
			style:height="80px"
			alt={`picture of ${name}`}
		/>
	</div>
</div>
