<script lang="ts">
	let { href, children } = $props();
</script>

<a
	{href}
	class="shadow-glow-blue hover:shadow-glow-blue-hover rounded-xl border-2 border-white/5 bg-linear-[325deg] from-indigo-700 from-0% via-indigo-500 via-55% to-indigo-700 to-90% bg-size-[200%_auto] px-4 py-1 font-medium text-white transition-all duration-700 hover:bg-top-right hover:duration-700 active:scale-[0.96] active:border-white/50 active:duration-200"
	>{@render children?.()}</a
>
