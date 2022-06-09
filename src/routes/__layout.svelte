<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { initTransitionContext } from '$lib/utils/resource-context';

	initTransitionContext();
</script>

<svelte:head>
	<title>Shared Element Transitions in SvelteKit</title>
</svelte:head>

<Navbar />
<main class="text-slate-700 max-w-4xl m-auto">
	<slot />
</main>
<Footer />
