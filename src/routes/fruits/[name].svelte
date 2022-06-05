<script>
	export let name;
	export let image;
	export let amountPer;
	export let nutrition;

	import Nutrition from '$lib/Nutrition.svelte';

	// import { usePageTransition } from '../../utils/use-page-transition'
	// const ref = usePageTransition() TODO, ref was on first div
</script>

<div class={'flex flex-col items-center justify-center py-4 px-4 sm:flex-row'}>
	<div class="flex flex-col items-center sm:w-2/4">
		<img
			class="object-cover border-gray-100 border-2 rounded-full shared-element"
			src={image}
			width="240"
			style:height="240px"
			alt={`picture of ${name}`}
		/>
		<h1 class="text-4xl font-bold mt-4">{name}</h1>
	</div>

	<div class="sm:w-2/4 w-full">
		<Nutrition {amountPer} {nutrition} />
	</div>
</div>
