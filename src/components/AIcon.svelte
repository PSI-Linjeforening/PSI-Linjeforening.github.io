<script>
	/*
	 * Simple wrapper for svelte-icons, which also makes the icon a link
	 */
	export let href;
	export let size;
	import Icon from "./Icon.svelte";
</script>

<style>
	a {
		position: relative;
	}

	a:hover::after {
		position: absolute;
		content: "";
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(214, 83, 226);
		margin: 0 0.5em;
		display: block;
		bottom: -1px;
	}
</style>

<a style="width: {size}; height: {size};" class="icon" {href}>
	<Icon {size}>
		<slot />
	</Icon>
</a>
