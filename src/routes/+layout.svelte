<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div
	class="overflow-x-clip scroll-smooth bg-zinc-950 antialiased selection:bg-indigo-700 selection:text-white"
>
	<Navbar />
	{@render children()}
</div>
