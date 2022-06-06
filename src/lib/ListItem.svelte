<script>
	export let item;
	export let href;

	import Icon from '$lib/Icon.svelte';
</script>

<li class="p-3 hover:bg-slate-100 hover:text-slate-900">
	<a {href} class="block flex items-center">
		<Icon src={item.image} name={item.name} className="shared-element" />
		<div class="text-xl">{item.name}</div>
	</a>
</li>
