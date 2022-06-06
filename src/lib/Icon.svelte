<script>
	export let src;
	export let name;
	export let className = '';
</script>

<div class="mr-8">
	<div>
		<!-- This was next/image, but swapped to regular img for this demo -->
		<img
			class={`object-cover border-gray-100 border-2 rounded-full ${className}`}
			{src}
			width="80"
			style:height="80px"
			style:--transition-tag={name}
			alt={`picture of ${name}`}
		/>
	</div>
</div>

<style>
	img {
		page-transition-tag: var(--transition-tag);
	}
</style>
