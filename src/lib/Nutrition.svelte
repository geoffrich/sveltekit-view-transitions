<script>
	export let nutrition;
	export let amountPer;
</script>

<div class="bg-white shadow overflow-hidden sm:rounded-lg mt-8">
	<div class="px-4 py-5 sm:px-6">
		<h3 class="text-lg leading-6 font-medium text-gray-900">Nutrition Facts</h3>
		<p class="mt-1 max-w-2xl text-sm text-gray-500">Amount per {amountPer}</p>
	</div>
	<div class="border-t border-gray-200">
		<dl>
			{#each Object.keys(nutrition) as key, idx (key)}
				<div class={`${idx % 2 == 0 ? 'bg-gray-50' : 'bg-whilte'} px-4 py-5`}>
					<dt class="text-sm font-medium text-gray-500">{key}</dt>
					<dd class="mt-1 text-sm text-gray-900">{nutrition[key]}</dd>
				</div>
			{/each}
		</dl>
	</div>
</div>
