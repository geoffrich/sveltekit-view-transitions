<script>
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { preparePageTransition } from '$lib/page-transition';

	preparePageTransition();
</script>

<Navbar />
<main class="text-slate-700 max-w-4xl m-auto">
	<slot />
</main>
<Footer />
