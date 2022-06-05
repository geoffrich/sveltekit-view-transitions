<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { initResourceContext } from '$lib/utils/resource-context';
	import { navigating } from '$app/stores';

	initResourceContext();

	$: console.log('navigating', $navigating);
</script>

<svelte:head>
	<title>Instant & Seamless DEMO</title>
</svelte:head>

<Navbar />
<main class="text-slate-700 max-w-4xl m-auto">
	<slot />
</main>
<Footer />
