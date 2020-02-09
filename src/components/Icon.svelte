<script>
	/*
	 * Simple wrapper for svelte-icons
	 */
	export let size = "1em";
</script>

<style>
	div {
		display: inline-block;
	}
</style>

<div style="width: {size}; height: {size};" class="icon">
	<slot />
</div>
