<script>
	import ListItem from '$lib/ListItem.svelte';
	export let items;

	// TODO: Cache-Control:   res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')
</script>

<div class="flex-col items-center justify-center py-4 px-4">
	<h1 class="my-4 text-xl">List of vegetables</h1>

	<ul class="divide-y-2 divide-gray-100">
		{#each items as item (`v-${item.name}`)}
			<ListItem {item} href={`/vegetables/${item.name}`} />
		{/each}
	</ul>
</div>
