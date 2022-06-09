<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { initTransitionContext } from '$lib/utils/resource-context';
	import { preparePageTransition } from '$lib/utils/use-page-transition';

	initTransitionContext();
	preparePageTransition();
</script>

<Navbar />
<main class="text-slate-700 max-w-4xl m-auto">
	<slot />
</main>
<Footer />
