<script>
	export let item;
	export let href;

	import Icon from '$lib/Icon.svelte';
</script>

<li class="p-3 hover:bg-slate-100 hover:text-slate-900">
	<a {href} class="block flex items-center">
		<Icon src={item.image} name={item.name} />
		<div class="text-xl" style:--tag="h-{item.name}">{item.name}</div>
	</a>
</li>
