<script>
	export let item;
	export let href;

	import Icon from '$lib/Icon.svelte';

	/* TODO
	import { usePageTransitionPrep } from '../utils/use-page-transition'

	const transitionNextState = usePageTransitionPrep()
  const handleClick = async (e) => {
    const elm = e.target.closest('a')
    await transitionNextState(elm)
  }

	*/

	function handleClick() {}
</script>

<li class="p-3 hover:bg-slate-100 hover:text-slate-900">
	<a {href} class="block flex items-center" on:click={handleClick}>
		<Icon src={item.image} name={item.name} className="shared-element" />
		<div class="text-xl">{item.name}</div>
	</a>
</li>
