<script>
	export let item;
	export let href;

	import Icon from '$lib/Icon.svelte';
	import { getPageTransitionTrigger } from '$lib/utils/use-page-transition';

	const transitionNextState = getPageTransitionTrigger();

	function handleClick() {
		// TODO: this only works on click, not back/forward
		transitionNextState();
	}
</script>

<li class="p-3 hover:bg-slate-100 hover:text-slate-900">
	<a {href} class="block flex items-center" on:click={handleClick}>
		<Icon src={item.image} name={item.name} className="shared-element" />
		<div class="text-xl">{item.name}</div>
	</a>
</li>
