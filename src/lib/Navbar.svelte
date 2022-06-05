<nav class="bg-white sticky top-0 flex sm:justify-center space-x-4 p-4 shadow z-10">
	{#each [['Home', '/'], ['Fruits', '/fruits']] as [title, url] (title)}
		<a
			href={url}
			class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
		>
			{title}
		</a>
	{/each}
</nav>
