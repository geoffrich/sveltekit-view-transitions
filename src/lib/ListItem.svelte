<script>
	export let item;
	export let href;

	import Icon from '$lib/Icon.svelte';
	import { getPageTransitionTrigger } from '$lib/utils/use-page-transition';

	const transitionNextState = getPageTransitionTrigger();

	async function handleClick(e) {
		// TODO: this only works on click, not back/forward
		const elm = e.target.closest('a');
		// did this await make next wait for navigation?
		await transitionNextState(elm);
	}
</script>

<li class="p-3 hover:bg-slate-100 hover:text-slate-900">
	<a {href} class="block flex items-center" on:click={handleClick}>
		<Icon src={item.image} name={item.name} className="shared-element" />
		<div class="text-xl">{item.name}</div>
	</a>
</li>
