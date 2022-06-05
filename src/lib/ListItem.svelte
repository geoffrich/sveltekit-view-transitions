<script>
	export let item;
	export let href;

	import Icon from '$lib/Icon.svelte';
	import { usePageTransitionPrep } from '$lib/utils/use-page-transition';

	const transitionNextState = usePageTransitionPrep();

	async function handleClick(e) {
		const elm = e.target.closest('a');
		await transitionNextState(elm);
	}
</script>

<li class="p-3 hover:bg-slate-100 hover:text-slate-900">
	<a {href} class="block flex items-center" on:click={handleClick}>
		<Icon src={item.image} name={item.name} className="shared-element" />
		<div class="text-xl">{item.name}</div>
	</a>
</li>
